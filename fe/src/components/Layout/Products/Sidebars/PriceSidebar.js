import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { findByCode } from '../../../../services/Category';
import { RangeSidebar } from './Layout/RangeSidebar';
import { ListSidebar } from './Layout/ListSidebar';
import { instance as axios } from "../../Helpers/api";
import { Spinner } from '../../Helpers/animation';
import { usePrevious } from '../../Helpers/general';

function PriceSidebar(props) {
    const { addFacet, loading, type, facets, selectedFacets } = props;
    const categories = useSelector(state => state.categories);
    const { categoryCode } = props.match.params;
    const prevCategoryCode = usePrevious(categoryCode);

    const [stateObject, setObjectState] = useState({
        maxPrice: null,
        currentPrice: null,
    });

    useEffect(() => {
        let isSubscribed = true;
        if (type === 'browse' && 
            (categoryCode !== prevCategoryCode
            || !categories.loading
            || loading)) {
            findByCode(categoryCode)
                .then((category) => {
                axios.post(category._links.maxprice.href, selectedFacets.map(f => f.data))
                    .then((response) => {
                        if (isSubscribed) {
                            setObjectState((prevState) => ({
                                ...prevState,
                                maxPrice: response.data.data.value,
                                currentPrice: (prevState.currentPrice) ? prevState.currentPrice : response.data.data.value,
                            }));
                        }
                    });
                });
        }
        return () => (isSubscribed = false);
    }, [categoryCode, categories.loading, loading]);

    const changePrice = (newPrice) => {
        setObjectState((prevState) => ({
            ...prevState,
            currentPrice: newPrice,
        }));
        addFacet({
            data: {
                type: 'EntityFacet',
                id: newPrice,
                desc: `price <= ${newPrice}`,
                value: newPrice,
                facetingName: "price",
                count: null,
            }
        });
    }

    return (
        <React.Fragment>
            {(loading || categories.loading)
                ? <Spinner />
                : (type === 'browse')
                    ? <RangeSidebar
                        filterType={"price"}
                        heading={"filter by price"}
                        maxPrice={stateObject.maxPrice}
                        currentPrice={stateObject.currentPrice}
                        changePrice={changePrice} />
                    : <ListSidebar
                        filterType={"price"}
                        heading={"filter by price"}
                        items={facets}
                        modFacet={addFacet} />}
        </React.Fragment>
    )
}


export default PriceSidebar;