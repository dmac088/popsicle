SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SELECT setval('mochi.accessories_attr_lcl_prd_lcl_id_seq', (SELECT MAX(prd_lcl_id) FROM mochi.accessories_attr_lcl)+1, true);
SELECT setval('mochi.address_addr_id_seq', (SELECT MAX(addr_id) FROM mochi.address)+1, true);
SELECT setval('mochi.address_type_addr_typ_id_seq', (SELECT MAX(addr_typ_id) FROM mochi.address_type)+1, true);
SELECT setval('mochi.bag_bag_id_seq', (SELECT MAX(bag_id) FROM mochi.bag)+1, true);
SELECT setval('mochi.bag_item_bag_item_id_seq', (SELECT MAX(bag_item_id) FROM mochi.bag_item)+1, true);
SELECT setval('mochi.bag_item_disc_bag_item_disc_id_seq', (SELECT MAX(bag_item_disc_id) FROM mochi.bag_item_disc)+1, true);
SELECT setval('mochi.bag_item_status_bag_item_sts_id_seq', (SELECT MAX(bag_item_sts_id) FROM mochi.bag_item_status)+1, true);
SELECT setval('mochi.brand_attr_lcl_bnd_lcl_id_seq', (SELECT MAX(bnd_lcl_id) FROM mochi.brand_attr_lcl)+1, true);
SELECT setval('mochi.brand_bnd_id_seq', (SELECT MAX(bnd_id) FROM mochi.brand)+1, true);
SELECT setval('mochi.brand_category_bnd_cat_id_seq', (SELECT MAX(bnd_cat_id) FROM mochi.brand_category)+1, true);
SELECT setval('mochi.brand_promotion_bnd_id_seq', (SELECT MAX(bnd_id) FROM mochi.brand_promotion)+1, true);
SELECT setval('mochi.brand_promotion_prm_id_seq', (SELECT MAX(prm_id) FROM mochi.brand_promotion)+1, true);
SELECT setval('mochi.category_attr_lcl_cat_lcl_id_seq', (SELECT MAX(cat_lcl_id) FROM mochi.category_attr_lcl)+1, true);
SELECT setval('mochi.category_brand_cat_id_seq', (SELECT MAX(cat_id) FROM mochi.category_brand)+1, true);
SELECT setval('mochi.category_cat_id_seq', (SELECT MAX(cat_id) FROM mochi.category)+1, true);
SELECT setval('mochi.category_product_cat_id_seq', (SELECT MAX(cat_id) FROM mochi.category_product)+1, true);
SELECT setval('mochi.category_promotion_cat_id_seq', (SELECT MAX(cat_id) FROM mochi.category_promotion)+1, true);
SELECT setval('mochi.category_promotion_prm_id_seq', (SELECT MAX(prm_id) FROM mochi.category_promotion)+1, true);
SELECT setval('mochi.category_type_cat_typ_id_seq', (SELECT MAX(cat_typ_id) FROM mochi.category_type)+1, true);
SELECT setval('mochi.currency_ccy_id_seq', (SELECT MAX(ccy_id) FROM mochi.currency)+1, true);
SELECT setval('mochi.customer_rle_id_seq', (SELECT MAX(rle_id) FROM mochi.customer)+1, true);
SELECT setval('mochi.department_attr_lcl_dept_lcl_id_seq', (SELECT MAX(dept_lcl_id) FROM mochi.department_attr_lcl)+1, true);
SELECT setval('mochi.department_dept_id_seq', (SELECT MAX(dept_id) FROM mochi.department)+1, true);
SELECT setval('mochi.discount_dis_id_seq', (SELECT MAX(dis_id) FROM mochi.discount)+1, true);
SELECT setval('mochi.discount_type_dis_typ_id_seq', (SELECT MAX(dis_typ_id) FROM mochi.discount_type)+1, true);
SELECT setval('mochi.inventory_location_inv_loc_id_seq', (SELECT MAX(inv_loc_id) FROM mochi.inventory_location)+1, true);
SELECT setval('mochi.inventory_transaction_inv_trx_id_seq', (SELECT MAX(inv_trx_id) FROM mochi.inventory_transaction)+1, true);
SELECT setval('mochi.inventory_transaction_type_inv_trx_typ_id_seq', (SELECT MAX(inv_trx_typ_id) FROM mochi.inventory_transaction_type)+1, true);
SELECT setval('mochi.order_line_ord_id_seq', (SELECT MAX(ord_id) FROM mochi.order_line)+1, true);
SELECT setval('mochi.order_line_ord_lne_no_seq', (SELECT MAX(ord_lne_no) FROM mochi.order_line)+1, true);
SELECT setval('mochi.order_line_prd_id_seq', (SELECT MAX(prd_id) FROM mochi.order_line)+1, true);
SELECT setval('mochi.order_ord_id_seq', (SELECT MAX(ord_id) FROM mochi.order)+1, true);
SELECT setval('mochi.party_pty_id_seq', (SELECT MAX(pty_id) FROM mochi.party)+1, true);
SELECT setval('mochi.party_type_pty_typ_id_seq', (SELECT MAX(pty_typ_id) FROM mochi.party_type)+1, true);
SELECT setval('mochi.price_prc_id_seq', (SELECT MAX(prc_id) FROM mochi.price)+1, true);
SELECT setval('mochi.price_type_prc_typ_id_seq', (SELECT MAX(prc_typ_id) FROM mochi.price_type)+1, true);
SELECT setval('mochi.product_attr_lcl_prd_lcl_id_seq', (SELECT MAX(prd_lcl_id) FROM mochi.product_attr_lcl)+1, true);
SELECT setval('mochi.product_basic_prd_id_seq', (SELECT MAX(prd_id) FROM mochi.product_basic)+1, true);
SELECT setval('mochi.product_category_prd_cat_id_seq', (SELECT MAX(prd_cat_id) FROM mochi.product_category)+1, true);
SELECT setval('mochi.product_prd_id_seq', (SELECT MAX(prd_id) FROM mochi.product)+1, true);
SELECT setval('mochi.product_promotion_prd_id_seq', (SELECT MAX(prd_id) FROM mochi.product_promotion)+1, true);
SELECT setval('mochi.product_promotion_prm_id_seq', (SELECT MAX(prm_id) FROM mochi.product_promotion)+1, true);
SELECT setval('mochi.product_rating_prd_rat_id_seq', (SELECT MAX(prd_rat_id) FROM mochi.product_rating)+1, true);
SELECT setval('mochi.product_shipping_prd_id_seq', (SELECT MAX(prd_id) FROM mochi.product_shipping)+1, true);
SELECT setval('mochi.product_status_prd_sts_id_seq', (SELECT MAX(prd_sts_id) FROM mochi.product_status)+1, true);
SELECT setval('mochi.product_tag_prd_tag_id_seq', (SELECT MAX(prd_tag_id) FROM mochi.product_tag)+1, true);
SELECT setval('mochi.promotion_attr_lcl_prm_lcl_id_seq', (SELECT MAX(prm_lcl_id) FROM mochi.promotion_attr_lcl)+1, true);
SELECT setval('mochi.promotion_level_prm_lvl_id_seq', (SELECT MAX(prm_lvl_id) FROM mochi.promotion_level)+1, true);
SELECT setval('mochi.promotion_mechanic_prm_mec_id_seq', (SELECT MAX(prm_mec_id) FROM mochi.promotion_mechanic)+1, true);
SELECT setval('mochi.promotion_order_prm_id_seq', (SELECT MAX(prm_id) FROM mochi.promotion_order)+1, true);
SELECT setval('mochi.promotion_prm_id_seq', (SELECT MAX(prm_id) FROM mochi.promotion)+1, true);
SELECT setval('mochi.promotion_product_prm_id_seq', (SELECT MAX(prm_id) FROM mochi.promotion_product)+1, true);
SELECT setval('mochi.promotion_type_prm_typ_id_seq', (SELECT MAX(prm_typ_id) FROM mochi.promotion_type)+1, true);
SELECT setval('mochi.rating_rat_id_seq', (SELECT MAX(rat_id) FROM mochi.rating)+1, true);
SELECT setval('mochi.role_rle_id_seq', (SELECT MAX(rle_id) FROM mochi.role)+1, true);
SELECT setval('mochi.role_type_rle_typ_id_seq', (SELECT MAX(rle_typ_id) FROM mochi.role_type)+1, true);
SELECT setval('mochi.stock_on_hand_soh_id_seq', (SELECT MAX(soh_id) FROM mochi.stock_on_hand)+1, true);
SELECT setval('mochi.supplier_rle_id_seq', (SELECT MAX(rle_id) FROM mochi.supplier)+1, true);
SELECT setval('mochi.tag_attr_lcl_tag_lcl_id_seq', (SELECT MAX(tag_lcl_id) FROM mochi.tag_attr_lcl)+1, true);
SELECT setval('mochi.tag_tag_id_seq', (SELECT MAX(tag_id) FROM mochi.tag)+1, true);
SELECT setval('mochi.product_shipping_attr_lcl_prd_lcl_id_seq', (SELECT MAX(prd_lcl_id) FROM mochi.product_shipping_attr_lcl)+1, true);
