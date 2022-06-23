import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ListSidebar } from './Layout/ListSidebar';
import { findByCode } from '../../../../services/Category';
import { instance as axios } from "../../Helpers/api";
import { Spinner } from '../../Helpers/animation';
import { usePrevious } from '../../Helpers/general';


function BrandSidebar(props) {
    const { type, addFacet, selectedFacets, loading, facets } = props;
    const categories = useSelector(state => state.categories);
    const { categoryCode } = props.match.params;

    const [stateObject, setObjectState] = useState({
        brands: [],
        loading: true,
    });

    const prevCategoryCode = usePrevious(categoryCode);

    useEffect(() => {
        let isSubscribed = true;
        if (categoryCode && 
            categoryCode !== prevCategoryCode && 
            !categories.loading) {
            const currentCategory = findByCode(categories.list, categoryCode);
            if (!currentCategory) { return; }
            axios.post(currentCategory._links.brands.href, (type === 'browse')
                                                                ? selectedFacets.map(f => f.data)
                                                                : [])
                .then((response) => {
                    if (isSubscribed) {
                        setObjectState((prevState) => ({
                            ...prevState,
                            brands: (response.data._embedded)
                                ? response.data._embedded.brands
                                : [],
                        }));
                    }
                });
        }
        return () => (isSubscribed = false);
    }, [categoryCode, 
        categories.loading, 
        loading]);

    return (
        <React.Fragment>
            {(loading || categories.loading)
                ? <Spinner />
                : <ListSidebar
                    filterType={"brand"}
                    heading={"filter by brand"}
                    items={(type === 'browse') ? stateObject.brands.filter(({ data }) => !selectedFacets.some(x => x.data.id === data.id)) : facets}
                    modFacet={addFacet} />}
        </React.Fragment>
    )
}


export default BrandSidebar;