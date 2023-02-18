import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useHeaderCb, uselogo_and_linksCb, uselinksCb, useButtonsCb, useInfo_and_burgerimageCb, useInfo_about_burgerCb, usebest_place_in_LACb, usefirst_divCb, useDiv6Cb, useinformation_in_divCb, usebuttonsCb, useBurger_imageCb, useFavorite_apps_sectionCb, useapps_infoCb, useappsCb, usebrowse_our_menuCb, usebrowse_menuCb, usemenu_itemsCb, usebreakfastCb, useDiv9Cb, useDiv10Cb, useDiv11Cb, usemain_dishesCb, useDiv12Cb, useDiv13Cb, useDiv14Cb, useFlex24Cb, useDiv15Cb, useDiv16Cb, useDiv17Cb, useFlex25Cb, useDiv18Cb, useDiv19Cb, useDiv20Cb, useFlex26Cb, useabout_usCb, useimg_and_contactCb, usecome_and_visit_us_sectionCb, usecontact_titileCb, useaddressCb, uselocation_divCb, useFlex34Cb, useDiv24Cb, useFlex35Cb, useDiv25Cb, useaboutus_in_detailCb, useaboutus_first_para1Cb, useaboutus_btnsCb, usesnacks_sectionCb, useabout_menu_divCb, usesnack_itemsCb, usesnacks_first_rowCb, useitem_1Cb, useDiv41Cb, useDiv42Cb, useitem1_priceCb, useDiv40Cb, useitem_4Cb, useabout_item4Cb, useitem4_nameCb, useitem4_priceCb, useDiv43Cb, useitem_3Cb, useabout_item3Cb, useitem3_nameCb, useitem3_priceCb, useDiv46Cb, useitem_2Cb, useabout_item2Cb, useitem2_nameCb, useitem2_priceCb, useDiv49Cb, useorder_btnsCb, usesnacks_second_rowCb, useitem_6Cb, useitem6_priceCb, useDiv52Cb, useitem6_nameCb, useabout_item6Cb, useitem_7Cb, useitem7_priceCb, useDiv53Cb, useitem7_nameCb, useabout_item7Cb, useitem_8Cb, useitem8_priceCb, useDiv54Cb, useitem8_nameCb, useabout_item8Cb, useitem_5Cb, useitem5_priceCb, useDiv55Cb, useitem5_nameCb, useabout_item5Cb, usetriple_burgerimg_and_about_itCb, useburger_in_losangelsCb, useheadingCb, usesomething_about_itCb, useorder_btnnsCb, usetriple_burger_imgCb, usewhat_client_saysCb, usenumber_of_cmtsCb, useclients_saysCb, useabout_what_client_saysCb, usecomments_sectionCb, useleft_arrowCb, useactual_comment_sectionCb, usestarsCb, usecmt_headingCb, usecmt_about_burgersCb, useabout_the_userCb, useuser_detailsCb, useuser_nameCb, useuser_placeCb, useright_arrowCb, useorderbtnsCb, useour_articlesCb, usetitle_and_linksCb, usetitle_nameCb, usebrowse_other_articlesCb, usearticlesCb, usearticle_1Cb, usearticle1_headingCb, usearticle1_dateCb, useabout_article1Cb, usefour_articlesCb, usefirst_rowCb, usearticle2Cb, usearticle2_headingCb, usearticle2_dateCb, usearticle_3Cb, usearticle3_headingCb, usearticle3_dateCb, usesecond_rowCb, usearticle_4Cb, usearticle4_headingCb, usearticle4_dateCb, usearticle_5Cb, usearticle5_headingCb, usearticle5_dateCb, usecontact_and_book_your_tableCb, usebook_your_tableCb, usebookyourtable_titleCb, useres_emailCb, useDiv93Cb, useres_phonoCb, useDiv94Cb, useres_addressCb, useDiv95Cb, useinfo_divCb, usecontact_infoCb, useuser_dataCb, userow1Cb, useuser_name1Cb, useDiv98Cb, useuser_email1Cb, useDiv103Cb, userow2Cb, useuser_location1Cb, useDiv104Cb, useuser_phno1Cb, useDiv105Cb, userow3Cb, useuser_schedule1Cb, useDiv106Cb, useuser_date1Cb, useDiv107Cb, userow4Cb, useadd_a_noteCb, usesocial_mediaCb, useinsta_imagesCb, useinsta_imgs_2Cb, useFlex129Cb, useFlex130Cb, useinsta_linkCb, usefollow_us_on_instagramCb, useFlex131Cb, useFlex132Cb, useDiv110Cb, useFlex135Cb, useFlex133Cb, useFlex142Cb, useFlex140Cb, useFlex141Cb, useFlex134Cb, useFlex138Cb, useDiv120Cb, useDiv121Cb, useDiv122Cb, useDiv123Cb, useDiv124Cb, useDiv125Cb, useDiv126Cb, useDiv127Cb, useFlex139Cb, useDiv128Cb, useDiv129Cb, useDiv130Cb, useDiv131Cb, useDiv132Cb, useDiv133Cb, useDiv134Cb, useDiv135Cb, userestaurant_logoCb, useHomeCb, useAboutCb, useMenuCb, usePagesCb, useCartCb, useOrder_Online_btnCb, useReservate_btnCb, useText1Cb, useText2Cb, useTextBox3Cb, usereservate_btnCb, useorderonline_btnCb, useburgerimgCb, useTextBoxCb, useDoordashCb, usePostmatesCb, useRappiCb, useGrubHubCb, useMenu_textCb, useBreakfastimgCb, useBreakfast_textCb, useabout_breakfastCb, useexplore_menuCb, usemaindishesimgCb, useTextBox9Cb, useTextBox10Cb, usemaindishes_textCb, useImage10Cb, useTextBox12Cb, useTextBox13Cb, usedrinks_textCb, useImage11Cb, useTextBox15Cb, useTextBox16Cb, useTextBox17Cb, useorder_online_btnCb, useBook_a_table_buttonCb, useaboutus_imgCb, usetextCb, useImage14Cb, uselocationCb, useImage15Cb, useTextBox20Cb, useImage16Cb, useTextBox21Cb, useaboutus_titleCb, useaboutus_second_paraCb, useaboutus_first_para_textCb, useabout_us_btnCb, usejoin_our_team_btnCb, usemenu_textCb, useabout_menu_txtCb, useImage20Cb, useTextBox37Cb, usechicken_burgerCb, useTextBox36Cb, usepancake_imgCb, useTextBox40Cb, usePancakesCb, useTextBox39Cb, useclassic_fries_imgCb, useTextBox43Cb, useclassic_friesCb, useTextBox42Cb, usechocolate_milkshake_imgCb, useTextBox46Cb, usechocolate_milkshakeCb, useTextBox45Cb, useButton15Cb, useButton16Cb, usechicken_burger_imgCb, useTextBox48Cb, useChicken_BurgerCb, useTextBox53Cb, useEgg_toast_imgCb, useTextBox49Cb, useTextBox54Cb, useTextBox55Cb, useRegular_Soda_imgCb, useTextBox50Cb, useTextBox56Cb, useTextBox57Cb, useice_cream_imgCb, useTextBox51Cb, useTextBox58Cb, useTextBox59Cb, useTextBox60Cb, useTextBox61Cb, useButton17Cb, useButton18Cb, usetripleburger_imgCb, useTextBox62Cb, useTextBox63Cb, useTextBox64Cb, useImage29Cb, useImage31Cb, useImage33Cb, useImage34Cb, useImage35Cb, useImage36Cb, useTextBox65Cb, useTextBox66Cb, useuser_imgCb, useTextBox67Cb, useTextBox68Cb, useImage30Cb, usebookatable_btnCb, useorder_online_btn_Cb, useTextBox69Cb, useTextBox70Cb, useimage_1Cb, useTextBox74Cb, useTextBox75Cb, useTextBox76Cb, useimage_2Cb, useTextBox77Cb, useTextBox78Cb, useimage_3Cb, useTextBox80Cb, useTextBox81Cb, useimage_4Cb, useTextBox83Cb, useTextBox84Cb, useimage_5Cb, useTextBox86Cb, useTextBox87Cb, useTextBox93Cb, useImage44Cb, useTextBox89Cb, useImage45Cb, useTextBox90Cb, useImage46Cb, useTextBox91Cb, useTextBox92Cb, useuser_button1Cb, useInput4Cb, useTextBox94Cb, useInput5Cb, useTextBox99Cb, useInput6Cb, useTextBox100Cb, useInput7Cb, useTextBox101Cb, useInput8Cb, useTextBox102Cb, useInput9Cb, useTextBox103Cb, useInput10Cb, useTextBox104Cb, useImg1Cb, useimg2Cb, useimg3Cb, useimg4Cb, useimg6Cb, useimg5Cb, usefollow_usCb, useTextBox105Cb, useImage56Cb, useTextBox106Cb, useImage57Cb, useImage58Cb, useImage59Cb, useImage60Cb, useImage61Cb, useTextBox131Cb, useImage62Cb, useImage63Cb, useImage64Cb, useImage65Cb, useTextBox115Cb, useTextBox116Cb, useTextBox117Cb, useTextBox118Cb, useTextBox119Cb, useTextBox120Cb, useTextBox121Cb, useTextBox122Cb, useTextBox123Cb, useTextBox124Cb, useTextBox125Cb, useTextBox126Cb, useTextBox127Cb, useTextBox128Cb, useTextBox129Cb, useTextBox130Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const HeaderProps = useStore((state)=>state["Home"]["Header"]);
const HeaderIoProps = useIoStore((state)=>state["Home"]["Header"]);
const HeaderCb = useHeaderCb()
const logo_and_linksProps = useStore((state)=>state["Home"]["logo_and_links"]);
const logo_and_linksIoProps = useIoStore((state)=>state["Home"]["logo_and_links"]);
const logo_and_linksCb = uselogo_and_linksCb()
const linksProps = useStore((state)=>state["Home"]["links"]);
const linksIoProps = useIoStore((state)=>state["Home"]["links"]);
const linksCb = uselinksCb()
const ButtonsProps = useStore((state)=>state["Home"]["Buttons"]);
const ButtonsIoProps = useIoStore((state)=>state["Home"]["Buttons"]);
const ButtonsCb = useButtonsCb()
const Info_and_burgerimageProps = useStore((state)=>state["Home"]["Info_and_burgerimage"]);
const Info_and_burgerimageIoProps = useIoStore((state)=>state["Home"]["Info_and_burgerimage"]);
const Info_and_burgerimageCb = useInfo_and_burgerimageCb()
const Info_about_burgerProps = useStore((state)=>state["Home"]["Info_about_burger"]);
const Info_about_burgerIoProps = useIoStore((state)=>state["Home"]["Info_about_burger"]);
const Info_about_burgerCb = useInfo_about_burgerCb()
const best_place_in_LAProps = useStore((state)=>state["Home"]["best_place_in_LA"]);
const best_place_in_LAIoProps = useIoStore((state)=>state["Home"]["best_place_in_LA"]);
const best_place_in_LACb = usebest_place_in_LACb()
const first_divProps = useStore((state)=>state["Home"]["first_div"]);
const first_divIoProps = useIoStore((state)=>state["Home"]["first_div"]);
const first_divCb = usefirst_divCb()
const Div6Props = useStore((state)=>state["Home"]["Div6"]);
const Div6IoProps = useIoStore((state)=>state["Home"]["Div6"]);
const Div6Cb = useDiv6Cb()
const information_in_divProps = useStore((state)=>state["Home"]["information_in_div"]);
const information_in_divIoProps = useIoStore((state)=>state["Home"]["information_in_div"]);
const information_in_divCb = useinformation_in_divCb()
const buttonsProps = useStore((state)=>state["Home"]["buttons"]);
const buttonsIoProps = useIoStore((state)=>state["Home"]["buttons"]);
const buttonsCb = usebuttonsCb()
const Burger_imageProps = useStore((state)=>state["Home"]["Burger_image"]);
const Burger_imageIoProps = useIoStore((state)=>state["Home"]["Burger_image"]);
const Burger_imageCb = useBurger_imageCb()
const Favorite_apps_sectionProps = useStore((state)=>state["Home"]["Favorite_apps_section"]);
const Favorite_apps_sectionIoProps = useIoStore((state)=>state["Home"]["Favorite_apps_section"]);
const Favorite_apps_sectionCb = useFavorite_apps_sectionCb()
const apps_infoProps = useStore((state)=>state["Home"]["apps_info"]);
const apps_infoIoProps = useIoStore((state)=>state["Home"]["apps_info"]);
const apps_infoCb = useapps_infoCb()
const appsProps = useStore((state)=>state["Home"]["apps"]);
const appsIoProps = useIoStore((state)=>state["Home"]["apps"]);
const appsCb = useappsCb()
const browse_our_menuProps = useStore((state)=>state["Home"]["browse_our_menu"]);
const browse_our_menuIoProps = useIoStore((state)=>state["Home"]["browse_our_menu"]);
const browse_our_menuCb = usebrowse_our_menuCb()
const browse_menuProps = useStore((state)=>state["Home"]["browse_menu"]);
const browse_menuIoProps = useIoStore((state)=>state["Home"]["browse_menu"]);
const browse_menuCb = usebrowse_menuCb()
const menu_itemsProps = useStore((state)=>state["Home"]["menu_items"]);
const menu_itemsIoProps = useIoStore((state)=>state["Home"]["menu_items"]);
const menu_itemsCb = usemenu_itemsCb()
const breakfastProps = useStore((state)=>state["Home"]["breakfast"]);
const breakfastIoProps = useIoStore((state)=>state["Home"]["breakfast"]);
const breakfastCb = usebreakfastCb()
const Div9Props = useStore((state)=>state["Home"]["Div9"]);
const Div9IoProps = useIoStore((state)=>state["Home"]["Div9"]);
const Div9Cb = useDiv9Cb()
const Div10Props = useStore((state)=>state["Home"]["Div10"]);
const Div10IoProps = useIoStore((state)=>state["Home"]["Div10"]);
const Div10Cb = useDiv10Cb()
const Div11Props = useStore((state)=>state["Home"]["Div11"]);
const Div11IoProps = useIoStore((state)=>state["Home"]["Div11"]);
const Div11Cb = useDiv11Cb()
const main_dishesProps = useStore((state)=>state["Home"]["main_dishes"]);
const main_dishesIoProps = useIoStore((state)=>state["Home"]["main_dishes"]);
const main_dishesCb = usemain_dishesCb()
const Div12Props = useStore((state)=>state["Home"]["Div12"]);
const Div12IoProps = useIoStore((state)=>state["Home"]["Div12"]);
const Div12Cb = useDiv12Cb()
const Div13Props = useStore((state)=>state["Home"]["Div13"]);
const Div13IoProps = useIoStore((state)=>state["Home"]["Div13"]);
const Div13Cb = useDiv13Cb()
const Div14Props = useStore((state)=>state["Home"]["Div14"]);
const Div14IoProps = useIoStore((state)=>state["Home"]["Div14"]);
const Div14Cb = useDiv14Cb()
const Flex24Props = useStore((state)=>state["Home"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Home"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const Div15Props = useStore((state)=>state["Home"]["Div15"]);
const Div15IoProps = useIoStore((state)=>state["Home"]["Div15"]);
const Div15Cb = useDiv15Cb()
const Div16Props = useStore((state)=>state["Home"]["Div16"]);
const Div16IoProps = useIoStore((state)=>state["Home"]["Div16"]);
const Div16Cb = useDiv16Cb()
const Div17Props = useStore((state)=>state["Home"]["Div17"]);
const Div17IoProps = useIoStore((state)=>state["Home"]["Div17"]);
const Div17Cb = useDiv17Cb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Div18Props = useStore((state)=>state["Home"]["Div18"]);
const Div18IoProps = useIoStore((state)=>state["Home"]["Div18"]);
const Div18Cb = useDiv18Cb()
const Div19Props = useStore((state)=>state["Home"]["Div19"]);
const Div19IoProps = useIoStore((state)=>state["Home"]["Div19"]);
const Div19Cb = useDiv19Cb()
const Div20Props = useStore((state)=>state["Home"]["Div20"]);
const Div20IoProps = useIoStore((state)=>state["Home"]["Div20"]);
const Div20Cb = useDiv20Cb()
const Flex26Props = useStore((state)=>state["Home"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["Home"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const about_usProps = useStore((state)=>state["Home"]["about_us"]);
const about_usIoProps = useIoStore((state)=>state["Home"]["about_us"]);
const about_usCb = useabout_usCb()
const img_and_contactProps = useStore((state)=>state["Home"]["img_and_contact"]);
const img_and_contactIoProps = useIoStore((state)=>state["Home"]["img_and_contact"]);
const img_and_contactCb = useimg_and_contactCb()
const come_and_visit_us_sectionProps = useStore((state)=>state["Home"]["come_and_visit_us_section"]);
const come_and_visit_us_sectionIoProps = useIoStore((state)=>state["Home"]["come_and_visit_us_section"]);
const come_and_visit_us_sectionCb = usecome_and_visit_us_sectionCb()
const contact_titileProps = useStore((state)=>state["Home"]["contact_titile"]);
const contact_titileIoProps = useIoStore((state)=>state["Home"]["contact_titile"]);
const contact_titileCb = usecontact_titileCb()
const addressProps = useStore((state)=>state["Home"]["address"]);
const addressIoProps = useIoStore((state)=>state["Home"]["address"]);
const addressCb = useaddressCb()
const location_divProps = useStore((state)=>state["Home"]["location_div"]);
const location_divIoProps = useIoStore((state)=>state["Home"]["location_div"]);
const location_divCb = uselocation_divCb()
const Flex34Props = useStore((state)=>state["Home"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["Home"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Div24Props = useStore((state)=>state["Home"]["Div24"]);
const Div24IoProps = useIoStore((state)=>state["Home"]["Div24"]);
const Div24Cb = useDiv24Cb()
const Flex35Props = useStore((state)=>state["Home"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["Home"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Div25Props = useStore((state)=>state["Home"]["Div25"]);
const Div25IoProps = useIoStore((state)=>state["Home"]["Div25"]);
const Div25Cb = useDiv25Cb()
const aboutus_in_detailProps = useStore((state)=>state["Home"]["aboutus_in_detail"]);
const aboutus_in_detailIoProps = useIoStore((state)=>state["Home"]["aboutus_in_detail"]);
const aboutus_in_detailCb = useaboutus_in_detailCb()
const aboutus_first_para1Props = useStore((state)=>state["Home"]["aboutus_first_para1"]);
const aboutus_first_para1IoProps = useIoStore((state)=>state["Home"]["aboutus_first_para1"]);
const aboutus_first_para1Cb = useaboutus_first_para1Cb()
const aboutus_btnsProps = useStore((state)=>state["Home"]["aboutus_btns"]);
const aboutus_btnsIoProps = useIoStore((state)=>state["Home"]["aboutus_btns"]);
const aboutus_btnsCb = useaboutus_btnsCb()
const snacks_sectionProps = useStore((state)=>state["Home"]["snacks_section"]);
const snacks_sectionIoProps = useIoStore((state)=>state["Home"]["snacks_section"]);
const snacks_sectionCb = usesnacks_sectionCb()
const about_menu_divProps = useStore((state)=>state["Home"]["about_menu_div"]);
const about_menu_divIoProps = useIoStore((state)=>state["Home"]["about_menu_div"]);
const about_menu_divCb = useabout_menu_divCb()
const snack_itemsProps = useStore((state)=>state["Home"]["snack_items"]);
const snack_itemsIoProps = useIoStore((state)=>state["Home"]["snack_items"]);
const snack_itemsCb = usesnack_itemsCb()
const snacks_first_rowProps = useStore((state)=>state["Home"]["snacks_first_row"]);
const snacks_first_rowIoProps = useIoStore((state)=>state["Home"]["snacks_first_row"]);
const snacks_first_rowCb = usesnacks_first_rowCb()
const item_1Props = useStore((state)=>state["Home"]["item_1"]);
const item_1IoProps = useIoStore((state)=>state["Home"]["item_1"]);
const item_1Cb = useitem_1Cb()
const Div41Props = useStore((state)=>state["Home"]["Div41"]);
const Div41IoProps = useIoStore((state)=>state["Home"]["Div41"]);
const Div41Cb = useDiv41Cb()
const Div42Props = useStore((state)=>state["Home"]["Div42"]);
const Div42IoProps = useIoStore((state)=>state["Home"]["Div42"]);
const Div42Cb = useDiv42Cb()
const item1_priceProps = useStore((state)=>state["Home"]["item1_price"]);
const item1_priceIoProps = useIoStore((state)=>state["Home"]["item1_price"]);
const item1_priceCb = useitem1_priceCb()
const Div40Props = useStore((state)=>state["Home"]["Div40"]);
const Div40IoProps = useIoStore((state)=>state["Home"]["Div40"]);
const Div40Cb = useDiv40Cb()
const item_4Props = useStore((state)=>state["Home"]["item_4"]);
const item_4IoProps = useIoStore((state)=>state["Home"]["item_4"]);
const item_4Cb = useitem_4Cb()
const about_item4Props = useStore((state)=>state["Home"]["about_item4"]);
const about_item4IoProps = useIoStore((state)=>state["Home"]["about_item4"]);
const about_item4Cb = useabout_item4Cb()
const item4_nameProps = useStore((state)=>state["Home"]["item4_name"]);
const item4_nameIoProps = useIoStore((state)=>state["Home"]["item4_name"]);
const item4_nameCb = useitem4_nameCb()
const item4_priceProps = useStore((state)=>state["Home"]["item4_price"]);
const item4_priceIoProps = useIoStore((state)=>state["Home"]["item4_price"]);
const item4_priceCb = useitem4_priceCb()
const Div43Props = useStore((state)=>state["Home"]["Div43"]);
const Div43IoProps = useIoStore((state)=>state["Home"]["Div43"]);
const Div43Cb = useDiv43Cb()
const item_3Props = useStore((state)=>state["Home"]["item_3"]);
const item_3IoProps = useIoStore((state)=>state["Home"]["item_3"]);
const item_3Cb = useitem_3Cb()
const about_item3Props = useStore((state)=>state["Home"]["about_item3"]);
const about_item3IoProps = useIoStore((state)=>state["Home"]["about_item3"]);
const about_item3Cb = useabout_item3Cb()
const item3_nameProps = useStore((state)=>state["Home"]["item3_name"]);
const item3_nameIoProps = useIoStore((state)=>state["Home"]["item3_name"]);
const item3_nameCb = useitem3_nameCb()
const item3_priceProps = useStore((state)=>state["Home"]["item3_price"]);
const item3_priceIoProps = useIoStore((state)=>state["Home"]["item3_price"]);
const item3_priceCb = useitem3_priceCb()
const Div46Props = useStore((state)=>state["Home"]["Div46"]);
const Div46IoProps = useIoStore((state)=>state["Home"]["Div46"]);
const Div46Cb = useDiv46Cb()
const item_2Props = useStore((state)=>state["Home"]["item_2"]);
const item_2IoProps = useIoStore((state)=>state["Home"]["item_2"]);
const item_2Cb = useitem_2Cb()
const about_item2Props = useStore((state)=>state["Home"]["about_item2"]);
const about_item2IoProps = useIoStore((state)=>state["Home"]["about_item2"]);
const about_item2Cb = useabout_item2Cb()
const item2_nameProps = useStore((state)=>state["Home"]["item2_name"]);
const item2_nameIoProps = useIoStore((state)=>state["Home"]["item2_name"]);
const item2_nameCb = useitem2_nameCb()
const item2_priceProps = useStore((state)=>state["Home"]["item2_price"]);
const item2_priceIoProps = useIoStore((state)=>state["Home"]["item2_price"]);
const item2_priceCb = useitem2_priceCb()
const Div49Props = useStore((state)=>state["Home"]["Div49"]);
const Div49IoProps = useIoStore((state)=>state["Home"]["Div49"]);
const Div49Cb = useDiv49Cb()
const order_btnsProps = useStore((state)=>state["Home"]["order_btns"]);
const order_btnsIoProps = useIoStore((state)=>state["Home"]["order_btns"]);
const order_btnsCb = useorder_btnsCb()
const snacks_second_rowProps = useStore((state)=>state["Home"]["snacks_second_row"]);
const snacks_second_rowIoProps = useIoStore((state)=>state["Home"]["snacks_second_row"]);
const snacks_second_rowCb = usesnacks_second_rowCb()
const item_6Props = useStore((state)=>state["Home"]["item_6"]);
const item_6IoProps = useIoStore((state)=>state["Home"]["item_6"]);
const item_6Cb = useitem_6Cb()
const item6_priceProps = useStore((state)=>state["Home"]["item6_price"]);
const item6_priceIoProps = useIoStore((state)=>state["Home"]["item6_price"]);
const item6_priceCb = useitem6_priceCb()
const Div52Props = useStore((state)=>state["Home"]["Div52"]);
const Div52IoProps = useIoStore((state)=>state["Home"]["Div52"]);
const Div52Cb = useDiv52Cb()
const item6_nameProps = useStore((state)=>state["Home"]["item6_name"]);
const item6_nameIoProps = useIoStore((state)=>state["Home"]["item6_name"]);
const item6_nameCb = useitem6_nameCb()
const about_item6Props = useStore((state)=>state["Home"]["about_item6"]);
const about_item6IoProps = useIoStore((state)=>state["Home"]["about_item6"]);
const about_item6Cb = useabout_item6Cb()
const item_7Props = useStore((state)=>state["Home"]["item_7"]);
const item_7IoProps = useIoStore((state)=>state["Home"]["item_7"]);
const item_7Cb = useitem_7Cb()
const item7_priceProps = useStore((state)=>state["Home"]["item7_price"]);
const item7_priceIoProps = useIoStore((state)=>state["Home"]["item7_price"]);
const item7_priceCb = useitem7_priceCb()
const Div53Props = useStore((state)=>state["Home"]["Div53"]);
const Div53IoProps = useIoStore((state)=>state["Home"]["Div53"]);
const Div53Cb = useDiv53Cb()
const item7_nameProps = useStore((state)=>state["Home"]["item7_name"]);
const item7_nameIoProps = useIoStore((state)=>state["Home"]["item7_name"]);
const item7_nameCb = useitem7_nameCb()
const about_item7Props = useStore((state)=>state["Home"]["about_item7"]);
const about_item7IoProps = useIoStore((state)=>state["Home"]["about_item7"]);
const about_item7Cb = useabout_item7Cb()
const item_8Props = useStore((state)=>state["Home"]["item_8"]);
const item_8IoProps = useIoStore((state)=>state["Home"]["item_8"]);
const item_8Cb = useitem_8Cb()
const item8_priceProps = useStore((state)=>state["Home"]["item8_price"]);
const item8_priceIoProps = useIoStore((state)=>state["Home"]["item8_price"]);
const item8_priceCb = useitem8_priceCb()
const Div54Props = useStore((state)=>state["Home"]["Div54"]);
const Div54IoProps = useIoStore((state)=>state["Home"]["Div54"]);
const Div54Cb = useDiv54Cb()
const item8_nameProps = useStore((state)=>state["Home"]["item8_name"]);
const item8_nameIoProps = useIoStore((state)=>state["Home"]["item8_name"]);
const item8_nameCb = useitem8_nameCb()
const about_item8Props = useStore((state)=>state["Home"]["about_item8"]);
const about_item8IoProps = useIoStore((state)=>state["Home"]["about_item8"]);
const about_item8Cb = useabout_item8Cb()
const item_5Props = useStore((state)=>state["Home"]["item_5"]);
const item_5IoProps = useIoStore((state)=>state["Home"]["item_5"]);
const item_5Cb = useitem_5Cb()
const item5_priceProps = useStore((state)=>state["Home"]["item5_price"]);
const item5_priceIoProps = useIoStore((state)=>state["Home"]["item5_price"]);
const item5_priceCb = useitem5_priceCb()
const Div55Props = useStore((state)=>state["Home"]["Div55"]);
const Div55IoProps = useIoStore((state)=>state["Home"]["Div55"]);
const Div55Cb = useDiv55Cb()
const item5_nameProps = useStore((state)=>state["Home"]["item5_name"]);
const item5_nameIoProps = useIoStore((state)=>state["Home"]["item5_name"]);
const item5_nameCb = useitem5_nameCb()
const about_item5Props = useStore((state)=>state["Home"]["about_item5"]);
const about_item5IoProps = useIoStore((state)=>state["Home"]["about_item5"]);
const about_item5Cb = useabout_item5Cb()
const triple_burgerimg_and_about_itProps = useStore((state)=>state["Home"]["triple_burgerimg_and_about_it"]);
const triple_burgerimg_and_about_itIoProps = useIoStore((state)=>state["Home"]["triple_burgerimg_and_about_it"]);
const triple_burgerimg_and_about_itCb = usetriple_burgerimg_and_about_itCb()
const burger_in_losangelsProps = useStore((state)=>state["Home"]["burger_in_losangels"]);
const burger_in_losangelsIoProps = useIoStore((state)=>state["Home"]["burger_in_losangels"]);
const burger_in_losangelsCb = useburger_in_losangelsCb()
const headingProps = useStore((state)=>state["Home"]["heading"]);
const headingIoProps = useIoStore((state)=>state["Home"]["heading"]);
const headingCb = useheadingCb()
const something_about_itProps = useStore((state)=>state["Home"]["something_about_it"]);
const something_about_itIoProps = useIoStore((state)=>state["Home"]["something_about_it"]);
const something_about_itCb = usesomething_about_itCb()
const order_btnnsProps = useStore((state)=>state["Home"]["order_btnns"]);
const order_btnnsIoProps = useIoStore((state)=>state["Home"]["order_btnns"]);
const order_btnnsCb = useorder_btnnsCb()
const triple_burger_imgProps = useStore((state)=>state["Home"]["triple_burger_img"]);
const triple_burger_imgIoProps = useIoStore((state)=>state["Home"]["triple_burger_img"]);
const triple_burger_imgCb = usetriple_burger_imgCb()
const what_client_saysProps = useStore((state)=>state["Home"]["what_client_says"]);
const what_client_saysIoProps = useIoStore((state)=>state["Home"]["what_client_says"]);
const what_client_saysCb = usewhat_client_saysCb()
const number_of_cmtsProps = useStore((state)=>state["Home"]["number_of_cmts"]);
const number_of_cmtsIoProps = useIoStore((state)=>state["Home"]["number_of_cmts"]);
const number_of_cmtsCb = usenumber_of_cmtsCb()
const clients_saysProps = useStore((state)=>state["Home"]["clients_says"]);
const clients_saysIoProps = useIoStore((state)=>state["Home"]["clients_says"]);
const clients_saysCb = useclients_saysCb()
const about_what_client_saysProps = useStore((state)=>state["Home"]["about_what_client_says"]);
const about_what_client_saysIoProps = useIoStore((state)=>state["Home"]["about_what_client_says"]);
const about_what_client_saysCb = useabout_what_client_saysCb()
const comments_sectionProps = useStore((state)=>state["Home"]["comments_section"]);
const comments_sectionIoProps = useIoStore((state)=>state["Home"]["comments_section"]);
const comments_sectionCb = usecomments_sectionCb()
const left_arrowProps = useStore((state)=>state["Home"]["left_arrow"]);
const left_arrowIoProps = useIoStore((state)=>state["Home"]["left_arrow"]);
const left_arrowCb = useleft_arrowCb()
const actual_comment_sectionProps = useStore((state)=>state["Home"]["actual_comment_section"]);
const actual_comment_sectionIoProps = useIoStore((state)=>state["Home"]["actual_comment_section"]);
const actual_comment_sectionCb = useactual_comment_sectionCb()
const starsProps = useStore((state)=>state["Home"]["stars"]);
const starsIoProps = useIoStore((state)=>state["Home"]["stars"]);
const starsCb = usestarsCb()
const cmt_headingProps = useStore((state)=>state["Home"]["cmt_heading"]);
const cmt_headingIoProps = useIoStore((state)=>state["Home"]["cmt_heading"]);
const cmt_headingCb = usecmt_headingCb()
const cmt_about_burgersProps = useStore((state)=>state["Home"]["cmt_about_burgers"]);
const cmt_about_burgersIoProps = useIoStore((state)=>state["Home"]["cmt_about_burgers"]);
const cmt_about_burgersCb = usecmt_about_burgersCb()
const about_the_userProps = useStore((state)=>state["Home"]["about_the_user"]);
const about_the_userIoProps = useIoStore((state)=>state["Home"]["about_the_user"]);
const about_the_userCb = useabout_the_userCb()
const user_detailsProps = useStore((state)=>state["Home"]["user_details"]);
const user_detailsIoProps = useIoStore((state)=>state["Home"]["user_details"]);
const user_detailsCb = useuser_detailsCb()
const user_nameProps = useStore((state)=>state["Home"]["user_name"]);
const user_nameIoProps = useIoStore((state)=>state["Home"]["user_name"]);
const user_nameCb = useuser_nameCb()
const user_placeProps = useStore((state)=>state["Home"]["user_place"]);
const user_placeIoProps = useIoStore((state)=>state["Home"]["user_place"]);
const user_placeCb = useuser_placeCb()
const right_arrowProps = useStore((state)=>state["Home"]["right_arrow"]);
const right_arrowIoProps = useIoStore((state)=>state["Home"]["right_arrow"]);
const right_arrowCb = useright_arrowCb()
const orderbtnsProps = useStore((state)=>state["Home"]["orderbtns"]);
const orderbtnsIoProps = useIoStore((state)=>state["Home"]["orderbtns"]);
const orderbtnsCb = useorderbtnsCb()
const our_articlesProps = useStore((state)=>state["Home"]["our_articles"]);
const our_articlesIoProps = useIoStore((state)=>state["Home"]["our_articles"]);
const our_articlesCb = useour_articlesCb()
const title_and_linksProps = useStore((state)=>state["Home"]["title_and_links"]);
const title_and_linksIoProps = useIoStore((state)=>state["Home"]["title_and_links"]);
const title_and_linksCb = usetitle_and_linksCb()
const title_nameProps = useStore((state)=>state["Home"]["title_name"]);
const title_nameIoProps = useIoStore((state)=>state["Home"]["title_name"]);
const title_nameCb = usetitle_nameCb()
const browse_other_articlesProps = useStore((state)=>state["Home"]["browse_other_articles"]);
const browse_other_articlesIoProps = useIoStore((state)=>state["Home"]["browse_other_articles"]);
const browse_other_articlesCb = usebrowse_other_articlesCb()
const articlesProps = useStore((state)=>state["Home"]["articles"]);
const articlesIoProps = useIoStore((state)=>state["Home"]["articles"]);
const articlesCb = usearticlesCb()
const article_1Props = useStore((state)=>state["Home"]["article_1"]);
const article_1IoProps = useIoStore((state)=>state["Home"]["article_1"]);
const article_1Cb = usearticle_1Cb()
const article1_headingProps = useStore((state)=>state["Home"]["article1_heading"]);
const article1_headingIoProps = useIoStore((state)=>state["Home"]["article1_heading"]);
const article1_headingCb = usearticle1_headingCb()
const article1_dateProps = useStore((state)=>state["Home"]["article1_date"]);
const article1_dateIoProps = useIoStore((state)=>state["Home"]["article1_date"]);
const article1_dateCb = usearticle1_dateCb()
const about_article1Props = useStore((state)=>state["Home"]["about_article1"]);
const about_article1IoProps = useIoStore((state)=>state["Home"]["about_article1"]);
const about_article1Cb = useabout_article1Cb()
const four_articlesProps = useStore((state)=>state["Home"]["four_articles"]);
const four_articlesIoProps = useIoStore((state)=>state["Home"]["four_articles"]);
const four_articlesCb = usefour_articlesCb()
const first_rowProps = useStore((state)=>state["Home"]["first_row"]);
const first_rowIoProps = useIoStore((state)=>state["Home"]["first_row"]);
const first_rowCb = usefirst_rowCb()
const article2Props = useStore((state)=>state["Home"]["article2"]);
const article2IoProps = useIoStore((state)=>state["Home"]["article2"]);
const article2Cb = usearticle2Cb()
const article2_headingProps = useStore((state)=>state["Home"]["article2_heading"]);
const article2_headingIoProps = useIoStore((state)=>state["Home"]["article2_heading"]);
const article2_headingCb = usearticle2_headingCb()
const article2_dateProps = useStore((state)=>state["Home"]["article2_date"]);
const article2_dateIoProps = useIoStore((state)=>state["Home"]["article2_date"]);
const article2_dateCb = usearticle2_dateCb()
const article_3Props = useStore((state)=>state["Home"]["article_3"]);
const article_3IoProps = useIoStore((state)=>state["Home"]["article_3"]);
const article_3Cb = usearticle_3Cb()
const article3_headingProps = useStore((state)=>state["Home"]["article3_heading"]);
const article3_headingIoProps = useIoStore((state)=>state["Home"]["article3_heading"]);
const article3_headingCb = usearticle3_headingCb()
const article3_dateProps = useStore((state)=>state["Home"]["article3_date"]);
const article3_dateIoProps = useIoStore((state)=>state["Home"]["article3_date"]);
const article3_dateCb = usearticle3_dateCb()
const second_rowProps = useStore((state)=>state["Home"]["second_row"]);
const second_rowIoProps = useIoStore((state)=>state["Home"]["second_row"]);
const second_rowCb = usesecond_rowCb()
const article_4Props = useStore((state)=>state["Home"]["article_4"]);
const article_4IoProps = useIoStore((state)=>state["Home"]["article_4"]);
const article_4Cb = usearticle_4Cb()
const article4_headingProps = useStore((state)=>state["Home"]["article4_heading"]);
const article4_headingIoProps = useIoStore((state)=>state["Home"]["article4_heading"]);
const article4_headingCb = usearticle4_headingCb()
const article4_dateProps = useStore((state)=>state["Home"]["article4_date"]);
const article4_dateIoProps = useIoStore((state)=>state["Home"]["article4_date"]);
const article4_dateCb = usearticle4_dateCb()
const article_5Props = useStore((state)=>state["Home"]["article_5"]);
const article_5IoProps = useIoStore((state)=>state["Home"]["article_5"]);
const article_5Cb = usearticle_5Cb()
const article5_headingProps = useStore((state)=>state["Home"]["article5_heading"]);
const article5_headingIoProps = useIoStore((state)=>state["Home"]["article5_heading"]);
const article5_headingCb = usearticle5_headingCb()
const article5_dateProps = useStore((state)=>state["Home"]["article5_date"]);
const article5_dateIoProps = useIoStore((state)=>state["Home"]["article5_date"]);
const article5_dateCb = usearticle5_dateCb()
const contact_and_book_your_tableProps = useStore((state)=>state["Home"]["contact_and_book_your_table"]);
const contact_and_book_your_tableIoProps = useIoStore((state)=>state["Home"]["contact_and_book_your_table"]);
const contact_and_book_your_tableCb = usecontact_and_book_your_tableCb()
const book_your_tableProps = useStore((state)=>state["Home"]["book_your_table"]);
const book_your_tableIoProps = useIoStore((state)=>state["Home"]["book_your_table"]);
const book_your_tableCb = usebook_your_tableCb()
const bookyourtable_titleProps = useStore((state)=>state["Home"]["bookyourtable_title"]);
const bookyourtable_titleIoProps = useIoStore((state)=>state["Home"]["bookyourtable_title"]);
const bookyourtable_titleCb = usebookyourtable_titleCb()
const res_emailProps = useStore((state)=>state["Home"]["res_email"]);
const res_emailIoProps = useIoStore((state)=>state["Home"]["res_email"]);
const res_emailCb = useres_emailCb()
const Div93Props = useStore((state)=>state["Home"]["Div93"]);
const Div93IoProps = useIoStore((state)=>state["Home"]["Div93"]);
const Div93Cb = useDiv93Cb()
const res_phonoProps = useStore((state)=>state["Home"]["res_phono"]);
const res_phonoIoProps = useIoStore((state)=>state["Home"]["res_phono"]);
const res_phonoCb = useres_phonoCb()
const Div94Props = useStore((state)=>state["Home"]["Div94"]);
const Div94IoProps = useIoStore((state)=>state["Home"]["Div94"]);
const Div94Cb = useDiv94Cb()
const res_addressProps = useStore((state)=>state["Home"]["res_address"]);
const res_addressIoProps = useIoStore((state)=>state["Home"]["res_address"]);
const res_addressCb = useres_addressCb()
const Div95Props = useStore((state)=>state["Home"]["Div95"]);
const Div95IoProps = useIoStore((state)=>state["Home"]["Div95"]);
const Div95Cb = useDiv95Cb()
const info_divProps = useStore((state)=>state["Home"]["info_div"]);
const info_divIoProps = useIoStore((state)=>state["Home"]["info_div"]);
const info_divCb = useinfo_divCb()
const contact_infoProps = useStore((state)=>state["Home"]["contact_info"]);
const contact_infoIoProps = useIoStore((state)=>state["Home"]["contact_info"]);
const contact_infoCb = usecontact_infoCb()
const user_dataProps = useStore((state)=>state["Home"]["user_data"]);
const user_dataIoProps = useIoStore((state)=>state["Home"]["user_data"]);
const user_dataCb = useuser_dataCb()
const row1Props = useStore((state)=>state["Home"]["row1"]);
const row1IoProps = useIoStore((state)=>state["Home"]["row1"]);
const row1Cb = userow1Cb()
const user_name1Props = useStore((state)=>state["Home"]["user_name1"]);
const user_name1IoProps = useIoStore((state)=>state["Home"]["user_name1"]);
const user_name1Cb = useuser_name1Cb()
const Div98Props = useStore((state)=>state["Home"]["Div98"]);
const Div98IoProps = useIoStore((state)=>state["Home"]["Div98"]);
const Div98Cb = useDiv98Cb()
const user_email1Props = useStore((state)=>state["Home"]["user_email1"]);
const user_email1IoProps = useIoStore((state)=>state["Home"]["user_email1"]);
const user_email1Cb = useuser_email1Cb()
const Div103Props = useStore((state)=>state["Home"]["Div103"]);
const Div103IoProps = useIoStore((state)=>state["Home"]["Div103"]);
const Div103Cb = useDiv103Cb()
const row2Props = useStore((state)=>state["Home"]["row2"]);
const row2IoProps = useIoStore((state)=>state["Home"]["row2"]);
const row2Cb = userow2Cb()
const user_location1Props = useStore((state)=>state["Home"]["user_location1"]);
const user_location1IoProps = useIoStore((state)=>state["Home"]["user_location1"]);
const user_location1Cb = useuser_location1Cb()
const Div104Props = useStore((state)=>state["Home"]["Div104"]);
const Div104IoProps = useIoStore((state)=>state["Home"]["Div104"]);
const Div104Cb = useDiv104Cb()
const user_phno1Props = useStore((state)=>state["Home"]["user_phno1"]);
const user_phno1IoProps = useIoStore((state)=>state["Home"]["user_phno1"]);
const user_phno1Cb = useuser_phno1Cb()
const Div105Props = useStore((state)=>state["Home"]["Div105"]);
const Div105IoProps = useIoStore((state)=>state["Home"]["Div105"]);
const Div105Cb = useDiv105Cb()
const row3Props = useStore((state)=>state["Home"]["row3"]);
const row3IoProps = useIoStore((state)=>state["Home"]["row3"]);
const row3Cb = userow3Cb()
const user_schedule1Props = useStore((state)=>state["Home"]["user_schedule1"]);
const user_schedule1IoProps = useIoStore((state)=>state["Home"]["user_schedule1"]);
const user_schedule1Cb = useuser_schedule1Cb()
const Div106Props = useStore((state)=>state["Home"]["Div106"]);
const Div106IoProps = useIoStore((state)=>state["Home"]["Div106"]);
const Div106Cb = useDiv106Cb()
const user_date1Props = useStore((state)=>state["Home"]["user_date1"]);
const user_date1IoProps = useIoStore((state)=>state["Home"]["user_date1"]);
const user_date1Cb = useuser_date1Cb()
const Div107Props = useStore((state)=>state["Home"]["Div107"]);
const Div107IoProps = useIoStore((state)=>state["Home"]["Div107"]);
const Div107Cb = useDiv107Cb()
const row4Props = useStore((state)=>state["Home"]["row4"]);
const row4IoProps = useIoStore((state)=>state["Home"]["row4"]);
const row4Cb = userow4Cb()
const add_a_noteProps = useStore((state)=>state["Home"]["add_a_note"]);
const add_a_noteIoProps = useIoStore((state)=>state["Home"]["add_a_note"]);
const add_a_noteCb = useadd_a_noteCb()
const social_mediaProps = useStore((state)=>state["Home"]["social_media"]);
const social_mediaIoProps = useIoStore((state)=>state["Home"]["social_media"]);
const social_mediaCb = usesocial_mediaCb()
const insta_imagesProps = useStore((state)=>state["Home"]["insta_images"]);
const insta_imagesIoProps = useIoStore((state)=>state["Home"]["insta_images"]);
const insta_imagesCb = useinsta_imagesCb()
const insta_imgs_2Props = useStore((state)=>state["Home"]["insta_imgs_2"]);
const insta_imgs_2IoProps = useIoStore((state)=>state["Home"]["insta_imgs_2"]);
const insta_imgs_2Cb = useinsta_imgs_2Cb()
const Flex129Props = useStore((state)=>state["Home"]["Flex129"]);
const Flex129IoProps = useIoStore((state)=>state["Home"]["Flex129"]);
const Flex129Cb = useFlex129Cb()
const Flex130Props = useStore((state)=>state["Home"]["Flex130"]);
const Flex130IoProps = useIoStore((state)=>state["Home"]["Flex130"]);
const Flex130Cb = useFlex130Cb()
const insta_linkProps = useStore((state)=>state["Home"]["insta_link"]);
const insta_linkIoProps = useIoStore((state)=>state["Home"]["insta_link"]);
const insta_linkCb = useinsta_linkCb()
const follow_us_on_instagramProps = useStore((state)=>state["Home"]["follow_us_on_instagram"]);
const follow_us_on_instagramIoProps = useIoStore((state)=>state["Home"]["follow_us_on_instagram"]);
const follow_us_on_instagramCb = usefollow_us_on_instagramCb()
const Flex131Props = useStore((state)=>state["Home"]["Flex131"]);
const Flex131IoProps = useIoStore((state)=>state["Home"]["Flex131"]);
const Flex131Cb = useFlex131Cb()
const Flex132Props = useStore((state)=>state["Home"]["Flex132"]);
const Flex132IoProps = useIoStore((state)=>state["Home"]["Flex132"]);
const Flex132Cb = useFlex132Cb()
const Div110Props = useStore((state)=>state["Home"]["Div110"]);
const Div110IoProps = useIoStore((state)=>state["Home"]["Div110"]);
const Div110Cb = useDiv110Cb()
const Flex135Props = useStore((state)=>state["Home"]["Flex135"]);
const Flex135IoProps = useIoStore((state)=>state["Home"]["Flex135"]);
const Flex135Cb = useFlex135Cb()
const Flex133Props = useStore((state)=>state["Home"]["Flex133"]);
const Flex133IoProps = useIoStore((state)=>state["Home"]["Flex133"]);
const Flex133Cb = useFlex133Cb()
const Flex142Props = useStore((state)=>state["Home"]["Flex142"]);
const Flex142IoProps = useIoStore((state)=>state["Home"]["Flex142"]);
const Flex142Cb = useFlex142Cb()
const Flex140Props = useStore((state)=>state["Home"]["Flex140"]);
const Flex140IoProps = useIoStore((state)=>state["Home"]["Flex140"]);
const Flex140Cb = useFlex140Cb()
const Flex141Props = useStore((state)=>state["Home"]["Flex141"]);
const Flex141IoProps = useIoStore((state)=>state["Home"]["Flex141"]);
const Flex141Cb = useFlex141Cb()
const Flex134Props = useStore((state)=>state["Home"]["Flex134"]);
const Flex134IoProps = useIoStore((state)=>state["Home"]["Flex134"]);
const Flex134Cb = useFlex134Cb()
const Flex138Props = useStore((state)=>state["Home"]["Flex138"]);
const Flex138IoProps = useIoStore((state)=>state["Home"]["Flex138"]);
const Flex138Cb = useFlex138Cb()
const Div120Props = useStore((state)=>state["Home"]["Div120"]);
const Div120IoProps = useIoStore((state)=>state["Home"]["Div120"]);
const Div120Cb = useDiv120Cb()
const Div121Props = useStore((state)=>state["Home"]["Div121"]);
const Div121IoProps = useIoStore((state)=>state["Home"]["Div121"]);
const Div121Cb = useDiv121Cb()
const Div122Props = useStore((state)=>state["Home"]["Div122"]);
const Div122IoProps = useIoStore((state)=>state["Home"]["Div122"]);
const Div122Cb = useDiv122Cb()
const Div123Props = useStore((state)=>state["Home"]["Div123"]);
const Div123IoProps = useIoStore((state)=>state["Home"]["Div123"]);
const Div123Cb = useDiv123Cb()
const Div124Props = useStore((state)=>state["Home"]["Div124"]);
const Div124IoProps = useIoStore((state)=>state["Home"]["Div124"]);
const Div124Cb = useDiv124Cb()
const Div125Props = useStore((state)=>state["Home"]["Div125"]);
const Div125IoProps = useIoStore((state)=>state["Home"]["Div125"]);
const Div125Cb = useDiv125Cb()
const Div126Props = useStore((state)=>state["Home"]["Div126"]);
const Div126IoProps = useIoStore((state)=>state["Home"]["Div126"]);
const Div126Cb = useDiv126Cb()
const Div127Props = useStore((state)=>state["Home"]["Div127"]);
const Div127IoProps = useIoStore((state)=>state["Home"]["Div127"]);
const Div127Cb = useDiv127Cb()
const Flex139Props = useStore((state)=>state["Home"]["Flex139"]);
const Flex139IoProps = useIoStore((state)=>state["Home"]["Flex139"]);
const Flex139Cb = useFlex139Cb()
const Div128Props = useStore((state)=>state["Home"]["Div128"]);
const Div128IoProps = useIoStore((state)=>state["Home"]["Div128"]);
const Div128Cb = useDiv128Cb()
const Div129Props = useStore((state)=>state["Home"]["Div129"]);
const Div129IoProps = useIoStore((state)=>state["Home"]["Div129"]);
const Div129Cb = useDiv129Cb()
const Div130Props = useStore((state)=>state["Home"]["Div130"]);
const Div130IoProps = useIoStore((state)=>state["Home"]["Div130"]);
const Div130Cb = useDiv130Cb()
const Div131Props = useStore((state)=>state["Home"]["Div131"]);
const Div131IoProps = useIoStore((state)=>state["Home"]["Div131"]);
const Div131Cb = useDiv131Cb()
const Div132Props = useStore((state)=>state["Home"]["Div132"]);
const Div132IoProps = useIoStore((state)=>state["Home"]["Div132"]);
const Div132Cb = useDiv132Cb()
const Div133Props = useStore((state)=>state["Home"]["Div133"]);
const Div133IoProps = useIoStore((state)=>state["Home"]["Div133"]);
const Div133Cb = useDiv133Cb()
const Div134Props = useStore((state)=>state["Home"]["Div134"]);
const Div134IoProps = useIoStore((state)=>state["Home"]["Div134"]);
const Div134Cb = useDiv134Cb()
const Div135Props = useStore((state)=>state["Home"]["Div135"]);
const Div135IoProps = useIoStore((state)=>state["Home"]["Div135"]);
const Div135Cb = useDiv135Cb()
const restaurant_logoProps = useStore((state)=>state["Home"]["restaurant_logo"]);
const restaurant_logoIoProps = useIoStore((state)=>state["Home"]["restaurant_logo"]);
const restaurant_logoCb = userestaurant_logoCb()
const HomeProps = useStore((state)=>state["Home"]["Home"]);
const HomeIoProps = useIoStore((state)=>state["Home"]["Home"]);
const HomeCb = useHomeCb()
const AboutProps = useStore((state)=>state["Home"]["About"]);
const AboutIoProps = useIoStore((state)=>state["Home"]["About"]);
const AboutCb = useAboutCb()
const MenuProps = useStore((state)=>state["Home"]["Menu"]);
const MenuIoProps = useIoStore((state)=>state["Home"]["Menu"]);
const MenuCb = useMenuCb()
const PagesProps = useStore((state)=>state["Home"]["Pages"]);
const PagesIoProps = useIoStore((state)=>state["Home"]["Pages"]);
const PagesCb = usePagesCb()
const CartProps = useStore((state)=>state["Home"]["Cart"]);
const CartIoProps = useIoStore((state)=>state["Home"]["Cart"]);
const CartCb = useCartCb()
const Order_Online_btnProps = useStore((state)=>state["Home"]["Order_Online_btn"]);
const Order_Online_btnIoProps = useIoStore((state)=>state["Home"]["Order_Online_btn"]);
const Order_Online_btnCb = useOrder_Online_btnCb()
const Reservate_btnProps = useStore((state)=>state["Home"]["Reservate_btn"]);
const Reservate_btnIoProps = useIoStore((state)=>state["Home"]["Reservate_btn"]);
const Reservate_btnCb = useReservate_btnCb()
const Text1Props = useStore((state)=>state["Home"]["Text1"]);
const Text1IoProps = useIoStore((state)=>state["Home"]["Text1"]);
const Text1Cb = useText1Cb()
const Text2Props = useStore((state)=>state["Home"]["Text2"]);
const Text2IoProps = useIoStore((state)=>state["Home"]["Text2"]);
const Text2Cb = useText2Cb()
const TextBox3Props = useStore((state)=>state["Home"]["TextBox3"]);
const TextBox3IoProps = useIoStore((state)=>state["Home"]["TextBox3"]);
const TextBox3Cb = useTextBox3Cb()
const reservate_btnProps = useStore((state)=>state["Home"]["reservate_btn"]);
const reservate_btnIoProps = useIoStore((state)=>state["Home"]["reservate_btn"]);
const reservate_btnCb = usereservate_btnCb()
const orderonline_btnProps = useStore((state)=>state["Home"]["orderonline_btn"]);
const orderonline_btnIoProps = useIoStore((state)=>state["Home"]["orderonline_btn"]);
const orderonline_btnCb = useorderonline_btnCb()
const burgerimgProps = useStore((state)=>state["Home"]["burgerimg"]);
const burgerimgIoProps = useIoStore((state)=>state["Home"]["burgerimg"]);
const burgerimgCb = useburgerimgCb()
const TextBoxProps = useStore((state)=>state["Home"]["TextBox"]);
const TextBoxIoProps = useIoStore((state)=>state["Home"]["TextBox"]);
const TextBoxCb = useTextBoxCb()
const DoordashProps = useStore((state)=>state["Home"]["Doordash"]);
const DoordashIoProps = useIoStore((state)=>state["Home"]["Doordash"]);
const DoordashCb = useDoordashCb()
const PostmatesProps = useStore((state)=>state["Home"]["Postmates"]);
const PostmatesIoProps = useIoStore((state)=>state["Home"]["Postmates"]);
const PostmatesCb = usePostmatesCb()
const RappiProps = useStore((state)=>state["Home"]["Rappi"]);
const RappiIoProps = useIoStore((state)=>state["Home"]["Rappi"]);
const RappiCb = useRappiCb()
const GrubHubProps = useStore((state)=>state["Home"]["GrubHub"]);
const GrubHubIoProps = useIoStore((state)=>state["Home"]["GrubHub"]);
const GrubHubCb = useGrubHubCb()
const Menu_textProps = useStore((state)=>state["Home"]["Menu_text"]);
const Menu_textIoProps = useIoStore((state)=>state["Home"]["Menu_text"]);
const Menu_textCb = useMenu_textCb()
const BreakfastimgProps = useStore((state)=>state["Home"]["Breakfastimg"]);
const BreakfastimgIoProps = useIoStore((state)=>state["Home"]["Breakfastimg"]);
const BreakfastimgCb = useBreakfastimgCb()
const Breakfast_textProps = useStore((state)=>state["Home"]["Breakfast_text"]);
const Breakfast_textIoProps = useIoStore((state)=>state["Home"]["Breakfast_text"]);
const Breakfast_textCb = useBreakfast_textCb()
const about_breakfastProps = useStore((state)=>state["Home"]["about_breakfast"]);
const about_breakfastIoProps = useIoStore((state)=>state["Home"]["about_breakfast"]);
const about_breakfastCb = useabout_breakfastCb()
const explore_menuProps = useStore((state)=>state["Home"]["explore_menu"]);
const explore_menuIoProps = useIoStore((state)=>state["Home"]["explore_menu"]);
const explore_menuCb = useexplore_menuCb()
const maindishesimgProps = useStore((state)=>state["Home"]["maindishesimg"]);
const maindishesimgIoProps = useIoStore((state)=>state["Home"]["maindishesimg"]);
const maindishesimgCb = usemaindishesimgCb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const maindishes_textProps = useStore((state)=>state["Home"]["maindishes_text"]);
const maindishes_textIoProps = useIoStore((state)=>state["Home"]["maindishes_text"]);
const maindishes_textCb = usemaindishes_textCb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const drinks_textProps = useStore((state)=>state["Home"]["drinks_text"]);
const drinks_textIoProps = useIoStore((state)=>state["Home"]["drinks_text"]);
const drinks_textCb = usedrinks_textCb()
const Image11Props = useStore((state)=>state["Home"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["Home"]["Image11"]);
const Image11Cb = useImage11Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const order_online_btnProps = useStore((state)=>state["Home"]["order_online_btn"]);
const order_online_btnIoProps = useIoStore((state)=>state["Home"]["order_online_btn"]);
const order_online_btnCb = useorder_online_btnCb()
const Book_a_table_buttonProps = useStore((state)=>state["Home"]["Book_a_table_button"]);
const Book_a_table_buttonIoProps = useIoStore((state)=>state["Home"]["Book_a_table_button"]);
const Book_a_table_buttonCb = useBook_a_table_buttonCb()
const aboutus_imgProps = useStore((state)=>state["Home"]["aboutus_img"]);
const aboutus_imgIoProps = useIoStore((state)=>state["Home"]["aboutus_img"]);
const aboutus_imgCb = useaboutus_imgCb()
const textProps = useStore((state)=>state["Home"]["text"]);
const textIoProps = useIoStore((state)=>state["Home"]["text"]);
const textCb = usetextCb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const locationProps = useStore((state)=>state["Home"]["location"]);
const locationIoProps = useIoStore((state)=>state["Home"]["location"]);
const locationCb = uselocationCb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const aboutus_titleProps = useStore((state)=>state["Home"]["aboutus_title"]);
const aboutus_titleIoProps = useIoStore((state)=>state["Home"]["aboutus_title"]);
const aboutus_titleCb = useaboutus_titleCb()
const aboutus_second_paraProps = useStore((state)=>state["Home"]["aboutus_second_para"]);
const aboutus_second_paraIoProps = useIoStore((state)=>state["Home"]["aboutus_second_para"]);
const aboutus_second_paraCb = useaboutus_second_paraCb()
const aboutus_first_para_textProps = useStore((state)=>state["Home"]["aboutus_first_para_text"]);
const aboutus_first_para_textIoProps = useIoStore((state)=>state["Home"]["aboutus_first_para_text"]);
const aboutus_first_para_textCb = useaboutus_first_para_textCb()
const about_us_btnProps = useStore((state)=>state["Home"]["about_us_btn"]);
const about_us_btnIoProps = useIoStore((state)=>state["Home"]["about_us_btn"]);
const about_us_btnCb = useabout_us_btnCb()
const join_our_team_btnProps = useStore((state)=>state["Home"]["join_our_team_btn"]);
const join_our_team_btnIoProps = useIoStore((state)=>state["Home"]["join_our_team_btn"]);
const join_our_team_btnCb = usejoin_our_team_btnCb()
const menu_textProps = useStore((state)=>state["Home"]["menu_text"]);
const menu_textIoProps = useIoStore((state)=>state["Home"]["menu_text"]);
const menu_textCb = usemenu_textCb()
const about_menu_txtProps = useStore((state)=>state["Home"]["about_menu_txt"]);
const about_menu_txtIoProps = useIoStore((state)=>state["Home"]["about_menu_txt"]);
const about_menu_txtCb = useabout_menu_txtCb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const chicken_burgerProps = useStore((state)=>state["Home"]["chicken_burger"]);
const chicken_burgerIoProps = useIoStore((state)=>state["Home"]["chicken_burger"]);
const chicken_burgerCb = usechicken_burgerCb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const pancake_imgProps = useStore((state)=>state["Home"]["pancake_img"]);
const pancake_imgIoProps = useIoStore((state)=>state["Home"]["pancake_img"]);
const pancake_imgCb = usepancake_imgCb()
const TextBox40Props = useStore((state)=>state["Home"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Home"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const PancakesProps = useStore((state)=>state["Home"]["Pancakes"]);
const PancakesIoProps = useIoStore((state)=>state["Home"]["Pancakes"]);
const PancakesCb = usePancakesCb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const classic_fries_imgProps = useStore((state)=>state["Home"]["classic_fries_img"]);
const classic_fries_imgIoProps = useIoStore((state)=>state["Home"]["classic_fries_img"]);
const classic_fries_imgCb = useclassic_fries_imgCb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const classic_friesProps = useStore((state)=>state["Home"]["classic_fries"]);
const classic_friesIoProps = useIoStore((state)=>state["Home"]["classic_fries"]);
const classic_friesCb = useclassic_friesCb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const chocolate_milkshake_imgProps = useStore((state)=>state["Home"]["chocolate_milkshake_img"]);
const chocolate_milkshake_imgIoProps = useIoStore((state)=>state["Home"]["chocolate_milkshake_img"]);
const chocolate_milkshake_imgCb = usechocolate_milkshake_imgCb()
const TextBox46Props = useStore((state)=>state["Home"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Home"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const chocolate_milkshakeProps = useStore((state)=>state["Home"]["chocolate_milkshake"]);
const chocolate_milkshakeIoProps = useIoStore((state)=>state["Home"]["chocolate_milkshake"]);
const chocolate_milkshakeCb = usechocolate_milkshakeCb()
const TextBox45Props = useStore((state)=>state["Home"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Home"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const Button15Props = useStore((state)=>state["Home"]["Button15"]);
const Button15IoProps = useIoStore((state)=>state["Home"]["Button15"]);
const Button15Cb = useButton15Cb()
const Button16Props = useStore((state)=>state["Home"]["Button16"]);
const Button16IoProps = useIoStore((state)=>state["Home"]["Button16"]);
const Button16Cb = useButton16Cb()
const chicken_burger_imgProps = useStore((state)=>state["Home"]["chicken_burger_img"]);
const chicken_burger_imgIoProps = useIoStore((state)=>state["Home"]["chicken_burger_img"]);
const chicken_burger_imgCb = usechicken_burger_imgCb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const Chicken_BurgerProps = useStore((state)=>state["Home"]["Chicken_Burger"]);
const Chicken_BurgerIoProps = useIoStore((state)=>state["Home"]["Chicken_Burger"]);
const Chicken_BurgerCb = useChicken_BurgerCb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const Egg_toast_imgProps = useStore((state)=>state["Home"]["Egg_toast_img"]);
const Egg_toast_imgIoProps = useIoStore((state)=>state["Home"]["Egg_toast_img"]);
const Egg_toast_imgCb = useEgg_toast_imgCb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const Regular_Soda_imgProps = useStore((state)=>state["Home"]["Regular_Soda_img"]);
const Regular_Soda_imgIoProps = useIoStore((state)=>state["Home"]["Regular_Soda_img"]);
const Regular_Soda_imgCb = useRegular_Soda_imgCb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const ice_cream_imgProps = useStore((state)=>state["Home"]["ice_cream_img"]);
const ice_cream_imgIoProps = useIoStore((state)=>state["Home"]["ice_cream_img"]);
const ice_cream_imgCb = useice_cream_imgCb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const TextBox61Props = useStore((state)=>state["Home"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Home"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const Button17Props = useStore((state)=>state["Home"]["Button17"]);
const Button17IoProps = useIoStore((state)=>state["Home"]["Button17"]);
const Button17Cb = useButton17Cb()
const Button18Props = useStore((state)=>state["Home"]["Button18"]);
const Button18IoProps = useIoStore((state)=>state["Home"]["Button18"]);
const Button18Cb = useButton18Cb()
const tripleburger_imgProps = useStore((state)=>state["Home"]["tripleburger_img"]);
const tripleburger_imgIoProps = useIoStore((state)=>state["Home"]["tripleburger_img"]);
const tripleburger_imgCb = usetripleburger_imgCb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const TextBox64Props = useStore((state)=>state["Home"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["Home"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const Image33Props = useStore((state)=>state["Home"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["Home"]["Image33"]);
const Image33Cb = useImage33Cb()
const Image34Props = useStore((state)=>state["Home"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["Home"]["Image34"]);
const Image34Cb = useImage34Cb()
const Image35Props = useStore((state)=>state["Home"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["Home"]["Image35"]);
const Image35Cb = useImage35Cb()
const Image36Props = useStore((state)=>state["Home"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["Home"]["Image36"]);
const Image36Cb = useImage36Cb()
const TextBox65Props = useStore((state)=>state["Home"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Home"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const TextBox66Props = useStore((state)=>state["Home"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Home"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const user_imgProps = useStore((state)=>state["Home"]["user_img"]);
const user_imgIoProps = useIoStore((state)=>state["Home"]["user_img"]);
const user_imgCb = useuser_imgCb()
const TextBox67Props = useStore((state)=>state["Home"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["Home"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const TextBox68Props = useStore((state)=>state["Home"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Home"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const Image30Props = useStore((state)=>state["Home"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Home"]["Image30"]);
const Image30Cb = useImage30Cb()
const bookatable_btnProps = useStore((state)=>state["Home"]["bookatable_btn"]);
const bookatable_btnIoProps = useIoStore((state)=>state["Home"]["bookatable_btn"]);
const bookatable_btnCb = usebookatable_btnCb()
const order_online_btn_Props = useStore((state)=>state["Home"]["order_online_btn_"]);
const order_online_btn_IoProps = useIoStore((state)=>state["Home"]["order_online_btn_"]);
const order_online_btn_Cb = useorder_online_btn_Cb()
const TextBox69Props = useStore((state)=>state["Home"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["Home"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const TextBox70Props = useStore((state)=>state["Home"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Home"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const image_1Props = useStore((state)=>state["Home"]["image_1"]);
const image_1IoProps = useIoStore((state)=>state["Home"]["image_1"]);
const image_1Cb = useimage_1Cb()
const TextBox74Props = useStore((state)=>state["Home"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Home"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const TextBox75Props = useStore((state)=>state["Home"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Home"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const TextBox76Props = useStore((state)=>state["Home"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Home"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const image_2Props = useStore((state)=>state["Home"]["image_2"]);
const image_2IoProps = useIoStore((state)=>state["Home"]["image_2"]);
const image_2Cb = useimage_2Cb()
const TextBox77Props = useStore((state)=>state["Home"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["Home"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const TextBox78Props = useStore((state)=>state["Home"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Home"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const image_3Props = useStore((state)=>state["Home"]["image_3"]);
const image_3IoProps = useIoStore((state)=>state["Home"]["image_3"]);
const image_3Cb = useimage_3Cb()
const TextBox80Props = useStore((state)=>state["Home"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["Home"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const TextBox81Props = useStore((state)=>state["Home"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["Home"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const image_4Props = useStore((state)=>state["Home"]["image_4"]);
const image_4IoProps = useIoStore((state)=>state["Home"]["image_4"]);
const image_4Cb = useimage_4Cb()
const TextBox83Props = useStore((state)=>state["Home"]["TextBox83"]);
const TextBox83IoProps = useIoStore((state)=>state["Home"]["TextBox83"]);
const TextBox83Cb = useTextBox83Cb()
const TextBox84Props = useStore((state)=>state["Home"]["TextBox84"]);
const TextBox84IoProps = useIoStore((state)=>state["Home"]["TextBox84"]);
const TextBox84Cb = useTextBox84Cb()
const image_5Props = useStore((state)=>state["Home"]["image_5"]);
const image_5IoProps = useIoStore((state)=>state["Home"]["image_5"]);
const image_5Cb = useimage_5Cb()
const TextBox86Props = useStore((state)=>state["Home"]["TextBox86"]);
const TextBox86IoProps = useIoStore((state)=>state["Home"]["TextBox86"]);
const TextBox86Cb = useTextBox86Cb()
const TextBox87Props = useStore((state)=>state["Home"]["TextBox87"]);
const TextBox87IoProps = useIoStore((state)=>state["Home"]["TextBox87"]);
const TextBox87Cb = useTextBox87Cb()
const TextBox93Props = useStore((state)=>state["Home"]["TextBox93"]);
const TextBox93IoProps = useIoStore((state)=>state["Home"]["TextBox93"]);
const TextBox93Cb = useTextBox93Cb()
const Image44Props = useStore((state)=>state["Home"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["Home"]["Image44"]);
const Image44Cb = useImage44Cb()
const TextBox89Props = useStore((state)=>state["Home"]["TextBox89"]);
const TextBox89IoProps = useIoStore((state)=>state["Home"]["TextBox89"]);
const TextBox89Cb = useTextBox89Cb()
const Image45Props = useStore((state)=>state["Home"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["Home"]["Image45"]);
const Image45Cb = useImage45Cb()
const TextBox90Props = useStore((state)=>state["Home"]["TextBox90"]);
const TextBox90IoProps = useIoStore((state)=>state["Home"]["TextBox90"]);
const TextBox90Cb = useTextBox90Cb()
const Image46Props = useStore((state)=>state["Home"]["Image46"]);
const Image46IoProps = useIoStore((state)=>state["Home"]["Image46"]);
const Image46Cb = useImage46Cb()
const TextBox91Props = useStore((state)=>state["Home"]["TextBox91"]);
const TextBox91IoProps = useIoStore((state)=>state["Home"]["TextBox91"]);
const TextBox91Cb = useTextBox91Cb()
const TextBox92Props = useStore((state)=>state["Home"]["TextBox92"]);
const TextBox92IoProps = useIoStore((state)=>state["Home"]["TextBox92"]);
const TextBox92Cb = useTextBox92Cb()
const user_button1Props = useStore((state)=>state["Home"]["user_button1"]);
const user_button1IoProps = useIoStore((state)=>state["Home"]["user_button1"]);
const user_button1Cb = useuser_button1Cb()
const Input4Props = useStore((state)=>state["Home"]["Input4"]);
const Input4IoProps = useIoStore((state)=>state["Home"]["Input4"]);
const Input4Cb = useInput4Cb()
const TextBox94Props = useStore((state)=>state["Home"]["TextBox94"]);
const TextBox94IoProps = useIoStore((state)=>state["Home"]["TextBox94"]);
const TextBox94Cb = useTextBox94Cb()
const Input5Props = useStore((state)=>state["Home"]["Input5"]);
const Input5IoProps = useIoStore((state)=>state["Home"]["Input5"]);
const Input5Cb = useInput5Cb()
const TextBox99Props = useStore((state)=>state["Home"]["TextBox99"]);
const TextBox99IoProps = useIoStore((state)=>state["Home"]["TextBox99"]);
const TextBox99Cb = useTextBox99Cb()
const Input6Props = useStore((state)=>state["Home"]["Input6"]);
const Input6IoProps = useIoStore((state)=>state["Home"]["Input6"]);
const Input6Cb = useInput6Cb()
const TextBox100Props = useStore((state)=>state["Home"]["TextBox100"]);
const TextBox100IoProps = useIoStore((state)=>state["Home"]["TextBox100"]);
const TextBox100Cb = useTextBox100Cb()
const Input7Props = useStore((state)=>state["Home"]["Input7"]);
const Input7IoProps = useIoStore((state)=>state["Home"]["Input7"]);
const Input7Cb = useInput7Cb()
const TextBox101Props = useStore((state)=>state["Home"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["Home"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const Input8Props = useStore((state)=>state["Home"]["Input8"]);
const Input8IoProps = useIoStore((state)=>state["Home"]["Input8"]);
const Input8Cb = useInput8Cb()
const TextBox102Props = useStore((state)=>state["Home"]["TextBox102"]);
const TextBox102IoProps = useIoStore((state)=>state["Home"]["TextBox102"]);
const TextBox102Cb = useTextBox102Cb()
const Input9Props = useStore((state)=>state["Home"]["Input9"]);
const Input9IoProps = useIoStore((state)=>state["Home"]["Input9"]);
const Input9Cb = useInput9Cb()
const TextBox103Props = useStore((state)=>state["Home"]["TextBox103"]);
const TextBox103IoProps = useIoStore((state)=>state["Home"]["TextBox103"]);
const TextBox103Cb = useTextBox103Cb()
const Input10Props = useStore((state)=>state["Home"]["Input10"]);
const Input10IoProps = useIoStore((state)=>state["Home"]["Input10"]);
const Input10Cb = useInput10Cb()
const TextBox104Props = useStore((state)=>state["Home"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["Home"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const Img1Props = useStore((state)=>state["Home"]["Img1"]);
const Img1IoProps = useIoStore((state)=>state["Home"]["Img1"]);
const Img1Cb = useImg1Cb()
const img2Props = useStore((state)=>state["Home"]["img2"]);
const img2IoProps = useIoStore((state)=>state["Home"]["img2"]);
const img2Cb = useimg2Cb()
const img3Props = useStore((state)=>state["Home"]["img3"]);
const img3IoProps = useIoStore((state)=>state["Home"]["img3"]);
const img3Cb = useimg3Cb()
const img4Props = useStore((state)=>state["Home"]["img4"]);
const img4IoProps = useIoStore((state)=>state["Home"]["img4"]);
const img4Cb = useimg4Cb()
const img6Props = useStore((state)=>state["Home"]["img6"]);
const img6IoProps = useIoStore((state)=>state["Home"]["img6"]);
const img6Cb = useimg6Cb()
const img5Props = useStore((state)=>state["Home"]["img5"]);
const img5IoProps = useIoStore((state)=>state["Home"]["img5"]);
const img5Cb = useimg5Cb()
const follow_usProps = useStore((state)=>state["Home"]["follow_us"]);
const follow_usIoProps = useIoStore((state)=>state["Home"]["follow_us"]);
const follow_usCb = usefollow_usCb()
const TextBox105Props = useStore((state)=>state["Home"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["Home"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const Image56Props = useStore((state)=>state["Home"]["Image56"]);
const Image56IoProps = useIoStore((state)=>state["Home"]["Image56"]);
const Image56Cb = useImage56Cb()
const TextBox106Props = useStore((state)=>state["Home"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["Home"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const Image57Props = useStore((state)=>state["Home"]["Image57"]);
const Image57IoProps = useIoStore((state)=>state["Home"]["Image57"]);
const Image57Cb = useImage57Cb()
const Image58Props = useStore((state)=>state["Home"]["Image58"]);
const Image58IoProps = useIoStore((state)=>state["Home"]["Image58"]);
const Image58Cb = useImage58Cb()
const Image59Props = useStore((state)=>state["Home"]["Image59"]);
const Image59IoProps = useIoStore((state)=>state["Home"]["Image59"]);
const Image59Cb = useImage59Cb()
const Image60Props = useStore((state)=>state["Home"]["Image60"]);
const Image60IoProps = useIoStore((state)=>state["Home"]["Image60"]);
const Image60Cb = useImage60Cb()
const Image61Props = useStore((state)=>state["Home"]["Image61"]);
const Image61IoProps = useIoStore((state)=>state["Home"]["Image61"]);
const Image61Cb = useImage61Cb()
const TextBox131Props = useStore((state)=>state["Home"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["Home"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const Image62Props = useStore((state)=>state["Home"]["Image62"]);
const Image62IoProps = useIoStore((state)=>state["Home"]["Image62"]);
const Image62Cb = useImage62Cb()
const Image63Props = useStore((state)=>state["Home"]["Image63"]);
const Image63IoProps = useIoStore((state)=>state["Home"]["Image63"]);
const Image63Cb = useImage63Cb()
const Image64Props = useStore((state)=>state["Home"]["Image64"]);
const Image64IoProps = useIoStore((state)=>state["Home"]["Image64"]);
const Image64Cb = useImage64Cb()
const Image65Props = useStore((state)=>state["Home"]["Image65"]);
const Image65IoProps = useIoStore((state)=>state["Home"]["Image65"]);
const Image65Cb = useImage65Cb()
const TextBox115Props = useStore((state)=>state["Home"]["TextBox115"]);
const TextBox115IoProps = useIoStore((state)=>state["Home"]["TextBox115"]);
const TextBox115Cb = useTextBox115Cb()
const TextBox116Props = useStore((state)=>state["Home"]["TextBox116"]);
const TextBox116IoProps = useIoStore((state)=>state["Home"]["TextBox116"]);
const TextBox116Cb = useTextBox116Cb()
const TextBox117Props = useStore((state)=>state["Home"]["TextBox117"]);
const TextBox117IoProps = useIoStore((state)=>state["Home"]["TextBox117"]);
const TextBox117Cb = useTextBox117Cb()
const TextBox118Props = useStore((state)=>state["Home"]["TextBox118"]);
const TextBox118IoProps = useIoStore((state)=>state["Home"]["TextBox118"]);
const TextBox118Cb = useTextBox118Cb()
const TextBox119Props = useStore((state)=>state["Home"]["TextBox119"]);
const TextBox119IoProps = useIoStore((state)=>state["Home"]["TextBox119"]);
const TextBox119Cb = useTextBox119Cb()
const TextBox120Props = useStore((state)=>state["Home"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["Home"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const TextBox121Props = useStore((state)=>state["Home"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["Home"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const TextBox122Props = useStore((state)=>state["Home"]["TextBox122"]);
const TextBox122IoProps = useIoStore((state)=>state["Home"]["TextBox122"]);
const TextBox122Cb = useTextBox122Cb()
const TextBox123Props = useStore((state)=>state["Home"]["TextBox123"]);
const TextBox123IoProps = useIoStore((state)=>state["Home"]["TextBox123"]);
const TextBox123Cb = useTextBox123Cb()
const TextBox124Props = useStore((state)=>state["Home"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["Home"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const TextBox125Props = useStore((state)=>state["Home"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["Home"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const TextBox126Props = useStore((state)=>state["Home"]["TextBox126"]);
const TextBox126IoProps = useIoStore((state)=>state["Home"]["TextBox126"]);
const TextBox126Cb = useTextBox126Cb()
const TextBox127Props = useStore((state)=>state["Home"]["TextBox127"]);
const TextBox127IoProps = useIoStore((state)=>state["Home"]["TextBox127"]);
const TextBox127Cb = useTextBox127Cb()
const TextBox128Props = useStore((state)=>state["Home"]["TextBox128"]);
const TextBox128IoProps = useIoStore((state)=>state["Home"]["TextBox128"]);
const TextBox128Cb = useTextBox128Cb()
const TextBox129Props = useStore((state)=>state["Home"]["TextBox129"]);
const TextBox129IoProps = useIoStore((state)=>state["Home"]["TextBox129"]);
const TextBox129Cb = useTextBox129Cb()
const TextBox130Props = useStore((state)=>state["Home"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["Home"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()

  return (<>
  <Flex className="p-Home Header bpt" {...HeaderProps} {...HeaderCb} {...HeaderIoProps}>
<Flex className="p-Home logo_and_links bpt" {...logo_and_linksProps} {...logo_and_linksCb} {...logo_and_linksIoProps}>
<Image className="p-Home restaurant_logo bpt" {...restaurant_logoProps} {...restaurant_logoCb} {...restaurant_logoIoProps}/>
<Flex className="p-Home links bpt" {...linksProps} {...linksCb} {...linksIoProps}>
<Link className="p-Home Home bpt" {...HomeProps} {...HomeCb} {...HomeIoProps}/>
<Link className="p-Home About bpt" {...AboutProps} {...AboutCb} {...AboutIoProps}/>
<Link className="p-Home Menu bpt" {...MenuProps} {...MenuCb} {...MenuIoProps}/>
<Link className="p-Home Pages bpt" {...PagesProps} {...PagesCb} {...PagesIoProps}/>
<Link className="p-Home Cart bpt" {...CartProps} {...CartCb} {...CartIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Buttons bpt" {...ButtonsProps} {...ButtonsCb} {...ButtonsIoProps}>
<Button className="p-Home Order_Online_btn bpt" {...Order_Online_btnProps} {...Order_Online_btnCb} {...Order_Online_btnIoProps}/>
<Button className="p-Home Reservate_btn bpt" {...Reservate_btnProps} {...Reservate_btnCb} {...Reservate_btnIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Info_and_burgerimage bpt" {...Info_and_burgerimageProps} {...Info_and_burgerimageCb} {...Info_and_burgerimageIoProps}>
<Flex className="p-Home Info_about_burger bpt" {...Info_about_burgerProps} {...Info_about_burgerCb} {...Info_about_burgerIoProps}>
<Flex className="p-Home best_place_in_LA bpt" {...best_place_in_LAProps} {...best_place_in_LACb} {...best_place_in_LAIoProps}>
<Div className="p-Home first_div bpt" {...first_divProps} {...first_divCb} {...first_divIoProps}>
<TextBox className="p-Home Text1 bpt" {...Text1Props} {...Text1Cb} {...Text1IoProps}/>
</Div>
<Div className="p-Home Div6 bpt" {...Div6Props} {...Div6Cb} {...Div6IoProps}>
<TextBox className="p-Home Text2 bpt" {...Text2Props} {...Text2Cb} {...Text2IoProps}/>
</Div>
</Flex>
<Div className="p-Home information_in_div bpt" {...information_in_divProps} {...information_in_divCb} {...information_in_divIoProps}>
<TextBox className="p-Home TextBox3 bpt" {...TextBox3Props} {...TextBox3Cb} {...TextBox3IoProps}/>
</Div>
<Flex className="p-Home buttons bpt" {...buttonsProps} {...buttonsCb} {...buttonsIoProps}>
<Button className="p-Home reservate_btn bpt" {...reservate_btnProps} {...reservate_btnCb} {...reservate_btnIoProps}/>
<Button className="p-Home orderonline_btn bpt" {...orderonline_btnProps} {...orderonline_btnCb} {...orderonline_btnIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Burger_image bpt" {...Burger_imageProps} {...Burger_imageCb} {...Burger_imageIoProps}>
<Image className="p-Home burgerimg bpt" {...burgerimgProps} {...burgerimgCb} {...burgerimgIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Favorite_apps_section bpt" {...Favorite_apps_sectionProps} {...Favorite_apps_sectionCb} {...Favorite_apps_sectionIoProps}>
<Div className="p-Home apps_info bpt" {...apps_infoProps} {...apps_infoCb} {...apps_infoIoProps}>
<TextBox className="p-Home TextBox bpt" {...TextBoxProps} {...TextBoxCb} {...TextBoxIoProps}/>
</Div>
<Flex className="p-Home apps bpt" {...appsProps} {...appsCb} {...appsIoProps}>
<Image className="p-Home Doordash bpt" {...DoordashProps} {...DoordashCb} {...DoordashIoProps}/>
<Image className="p-Home Postmates bpt" {...PostmatesProps} {...PostmatesCb} {...PostmatesIoProps}/>
<Image className="p-Home Rappi bpt" {...RappiProps} {...RappiCb} {...RappiIoProps}/>
<Image className="p-Home GrubHub bpt" {...GrubHubProps} {...GrubHubCb} {...GrubHubIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home browse_our_menu bpt" {...browse_our_menuProps} {...browse_our_menuCb} {...browse_our_menuIoProps}>
<Div className="p-Home browse_menu bpt" {...browse_menuProps} {...browse_menuCb} {...browse_menuIoProps}>
<TextBox className="p-Home Menu_text bpt" {...Menu_textProps} {...Menu_textCb} {...Menu_textIoProps}/>
</Div>
<Flex className="p-Home menu_items bpt" {...menu_itemsProps} {...menu_itemsCb} {...menu_itemsIoProps}>
<Flex className="p-Home breakfast bpt" {...breakfastProps} {...breakfastCb} {...breakfastIoProps}>
<Image className="p-Home Breakfastimg bpt" {...BreakfastimgProps} {...BreakfastimgCb} {...BreakfastimgIoProps}/>
<Div className="p-Home Div9 bpt" {...Div9Props} {...Div9Cb} {...Div9IoProps}>
<TextBox className="p-Home Breakfast_text bpt" {...Breakfast_textProps} {...Breakfast_textCb} {...Breakfast_textIoProps}/>
</Div>
<Div className="p-Home Div10 bpt" {...Div10Props} {...Div10Cb} {...Div10IoProps}>
<TextBox className="p-Home about_breakfast bpt" {...about_breakfastProps} {...about_breakfastCb} {...about_breakfastIoProps}/>
</Div>
<Div className="p-Home Div11 bpt" {...Div11Props} {...Div11Cb} {...Div11IoProps}>
<TextBox className="p-Home explore_menu bpt" {...explore_menuProps} {...explore_menuCb} {...explore_menuIoProps}/>
</Div>
</Flex>
<Flex className="p-Home main_dishes bpt" {...main_dishesProps} {...main_dishesCb} {...main_dishesIoProps}>
<Image className="p-Home maindishesimg bpt" {...maindishesimgProps} {...maindishesimgCb} {...maindishesimgIoProps}/>
<Div className="p-Home Div14 bpt" {...Div14Props} {...Div14Cb} {...Div14IoProps}>
<TextBox className="p-Home maindishes_text bpt" {...maindishes_textProps} {...maindishes_textCb} {...maindishes_textIoProps}/>
</Div>
<Div className="p-Home Div13 bpt" {...Div13Props} {...Div13Cb} {...Div13IoProps}>
<TextBox className="p-Home TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
</Div>
<Div className="p-Home Div12 bpt" {...Div12Props} {...Div12Cb} {...Div12IoProps}>
<TextBox className="p-Home TextBox9 bpt" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex24 bpt" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<Image className="p-Home Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
<Div className="p-Home Div17 bpt" {...Div17Props} {...Div17Cb} {...Div17IoProps}>
<TextBox className="p-Home drinks_text bpt" {...drinks_textProps} {...drinks_textCb} {...drinks_textIoProps}/>
</Div>
<Div className="p-Home Div16 bpt" {...Div16Props} {...Div16Cb} {...Div16IoProps}>
<TextBox className="p-Home TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
</Div>
<Div className="p-Home Div15 bpt" {...Div15Props} {...Div15Cb} {...Div15IoProps}>
<TextBox className="p-Home TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex25 bpt" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<Image className="p-Home Image11 bpt" {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
<Div className="p-Home Div20 bpt" {...Div20Props} {...Div20Cb} {...Div20IoProps}>
<TextBox className="p-Home TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
</Div>
<Div className="p-Home Div19 bpt" {...Div19Props} {...Div19Cb} {...Div19IoProps}>
<TextBox className="p-Home TextBox16 bpt" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
</Div>
<Div className="p-Home Div18 bpt" {...Div18Props} {...Div18Cb} {...Div18IoProps}>
<TextBox className="p-Home TextBox15 bpt" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home Flex26 bpt" {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<Button className="p-Home order_online_btn bpt" {...order_online_btnProps} {...order_online_btnCb} {...order_online_btnIoProps}/>
<Button className="p-Home Book_a_table_button bpt" {...Book_a_table_buttonProps} {...Book_a_table_buttonCb} {...Book_a_table_buttonIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home about_us bpt" {...about_usProps} {...about_usCb} {...about_usIoProps}>
<Flex className="p-Home img_and_contact bpt" {...img_and_contactProps} {...img_and_contactCb} {...img_and_contactIoProps}>
<Image className="p-Home aboutus_img bpt" {...aboutus_imgProps} {...aboutus_imgCb} {...aboutus_imgIoProps}/>
<Flex className="p-Home come_and_visit_us_section bpt" {...come_and_visit_us_sectionProps} {...come_and_visit_us_sectionCb} {...come_and_visit_us_sectionIoProps}>
<Div className="p-Home contact_titile bpt" {...contact_titileProps} {...contact_titileCb} {...contact_titileIoProps}>
<TextBox className="p-Home text bpt" {...textProps} {...textCb} {...textIoProps}/>
</Div>
<Flex className="p-Home address bpt" {...addressProps} {...addressCb} {...addressIoProps}>
<Image className="p-Home Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
<Div className="p-Home location_div bpt" {...location_divProps} {...location_divCb} {...location_divIoProps}>
<TextBox className="p-Home location bpt" {...locationProps} {...locationCb} {...locationIoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<Image className="p-Home Image15 bpt" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
<Div className="p-Home Div24 bpt" {...Div24Props} {...Div24Cb} {...Div24IoProps}>
<TextBox className="p-Home TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<Image className="p-Home Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
<Div className="p-Home Div25 bpt" {...Div25Props} {...Div25Cb} {...Div25IoProps}>
<TextBox className="p-Home TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
</Div>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home aboutus_in_detail bpt" {...aboutus_in_detailProps} {...aboutus_in_detailCb} {...aboutus_in_detailIoProps}>
<TextBox className="p-Home aboutus_title bpt" {...aboutus_titleProps} {...aboutus_titleCb} {...aboutus_titleIoProps}/>
<Div className="p-Home aboutus_first_para1 bpt" {...aboutus_first_para1Props} {...aboutus_first_para1Cb} {...aboutus_first_para1IoProps}>
<TextBox className="p-Home aboutus_first_para_text bpt" {...aboutus_first_para_textProps} {...aboutus_first_para_textCb} {...aboutus_first_para_textIoProps}/>
</Div>
<TextBox className="p-Home aboutus_second_para bpt" {...aboutus_second_paraProps} {...aboutus_second_paraCb} {...aboutus_second_paraIoProps}/>
<Flex className="p-Home aboutus_btns bpt" {...aboutus_btnsProps} {...aboutus_btnsCb} {...aboutus_btnsIoProps}>
<Button className="p-Home about_us_btn bpt" {...about_us_btnProps} {...about_us_btnCb} {...about_us_btnIoProps}/>
<Button className="p-Home join_our_team_btn bpt" {...join_our_team_btnProps} {...join_our_team_btnCb} {...join_our_team_btnIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home snacks_section bpt" {...snacks_sectionProps} {...snacks_sectionCb} {...snacks_sectionIoProps}>
<TextBox className="p-Home menu_text bpt" {...menu_textProps} {...menu_textCb} {...menu_textIoProps}/>
<Div className="p-Home about_menu_div bpt" {...about_menu_divProps} {...about_menu_divCb} {...about_menu_divIoProps}>
<TextBox className="p-Home about_menu_txt bpt" {...about_menu_txtProps} {...about_menu_txtCb} {...about_menu_txtIoProps}/>
</Div>
<Flex className="p-Home snack_items bpt" {...snack_itemsProps} {...snack_itemsCb} {...snack_itemsIoProps}>
<Flex className="p-Home snacks_first_row bpt" {...snacks_first_rowProps} {...snacks_first_rowCb} {...snacks_first_rowIoProps}>
<Flex className="p-Home item_1 bpt" {...item_1Props} {...item_1Cb} {...item_1IoProps}>
<Flex className="p-Home item1_price bpt" {...item1_priceProps} {...item1_priceCb} {...item1_priceIoProps}>
<Div className="p-Home Div40 bpt" {...Div40Props} {...Div40Cb} {...Div40IoProps}>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
</Div>
</Flex>
<Image className="p-Home Image20 bpt" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
<Div className="p-Home Div42 bpt" {...Div42Props} {...Div42Cb} {...Div42IoProps}>
<TextBox className="p-Home chicken_burger bpt" {...chicken_burgerProps} {...chicken_burgerCb} {...chicken_burgerIoProps}/>
</Div>
<Div className="p-Home Div41 bpt" {...Div41Props} {...Div41Cb} {...Div41IoProps}>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
</Div>
</Flex>
<Flex className="p-Home item_2 bpt" {...item_2Props} {...item_2Cb} {...item_2IoProps}>
<Flex className="p-Home item2_price bpt" {...item2_priceProps} {...item2_priceCb} {...item2_priceIoProps}>
<Div className="p-Home Div49 bpt" {...Div49Props} {...Div49Cb} {...Div49IoProps}>
<TextBox className="p-Home TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
</Div>
</Flex>
<Image className="p-Home chocolate_milkshake_img bpt" {...chocolate_milkshake_imgProps} {...chocolate_milkshake_imgCb} {...chocolate_milkshake_imgIoProps}/>
<Div className="p-Home item2_name bpt" {...item2_nameProps} {...item2_nameCb} {...item2_nameIoProps}>
<TextBox className="p-Home chocolate_milkshake bpt" {...chocolate_milkshakeProps} {...chocolate_milkshakeCb} {...chocolate_milkshakeIoProps}/>
</Div>
<Div className="p-Home about_item2 bpt" {...about_item2Props} {...about_item2Cb} {...about_item2IoProps}>
<TextBox className="p-Home TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
</Div>
</Flex>
<Flex className="p-Home item_3 bpt" {...item_3Props} {...item_3Cb} {...item_3IoProps}>
<Flex className="p-Home item3_price bpt" {...item3_priceProps} {...item3_priceCb} {...item3_priceIoProps}>
<Div className="p-Home Div46 bpt" {...Div46Props} {...Div46Cb} {...Div46IoProps}>
<TextBox className="p-Home TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
</Div>
</Flex>
<Image className="p-Home classic_fries_img bpt" {...classic_fries_imgProps} {...classic_fries_imgCb} {...classic_fries_imgIoProps}/>
<Div className="p-Home item3_name bpt" {...item3_nameProps} {...item3_nameCb} {...item3_nameIoProps}>
<TextBox className="p-Home classic_fries bpt" {...classic_friesProps} {...classic_friesCb} {...classic_friesIoProps}/>
</Div>
<Div className="p-Home about_item3 bpt" {...about_item3Props} {...about_item3Cb} {...about_item3IoProps}>
<TextBox className="p-Home TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
</Div>
</Flex>
<Flex className="p-Home item_4 bpt" {...item_4Props} {...item_4Cb} {...item_4IoProps}>
<Flex className="p-Home item4_price bpt" {...item4_priceProps} {...item4_priceCb} {...item4_priceIoProps}>
<Div className="p-Home Div43 bpt" {...Div43Props} {...Div43Cb} {...Div43IoProps}>
<TextBox className="p-Home TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
</Div>
</Flex>
<Image className="p-Home pancake_img bpt" {...pancake_imgProps} {...pancake_imgCb} {...pancake_imgIoProps}/>
<Div className="p-Home item4_name bpt" {...item4_nameProps} {...item4_nameCb} {...item4_nameIoProps}>
<TextBox className="p-Home Pancakes bpt" {...PancakesProps} {...PancakesCb} {...PancakesIoProps}/>
</Div>
<Div className="p-Home about_item4 bpt" {...about_item4Props} {...about_item4Cb} {...about_item4IoProps}>
<TextBox className="p-Home TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home snacks_second_row bpt" {...snacks_second_rowProps} {...snacks_second_rowCb} {...snacks_second_rowIoProps}>
<Flex className="p-Home item_5 bpt" {...item_5Props} {...item_5Cb} {...item_5IoProps}>
<Flex className="p-Home item5_price bpt" {...item5_priceProps} {...item5_priceCb} {...item5_priceIoProps}>
<Div className="p-Home Div55 bpt" {...Div55Props} {...Div55Cb} {...Div55IoProps}>
<TextBox className="p-Home TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
</Div>
</Flex>
<Image className="p-Home ice_cream_img bpt" {...ice_cream_imgProps} {...ice_cream_imgCb} {...ice_cream_imgIoProps}/>
<Div className="p-Home item5_name bpt" {...item5_nameProps} {...item5_nameCb} {...item5_nameIoProps}>
<TextBox className="p-Home TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
</Div>
<Div className="p-Home about_item5 bpt" {...about_item5Props} {...about_item5Cb} {...about_item5IoProps}>
<TextBox className="p-Home TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
</Div>
</Flex>
<Flex className="p-Home item_6 bpt" {...item_6Props} {...item_6Cb} {...item_6IoProps}>
<Flex className="p-Home item6_price bpt" {...item6_priceProps} {...item6_priceCb} {...item6_priceIoProps}>
<Div className="p-Home Div52 bpt" {...Div52Props} {...Div52Cb} {...Div52IoProps}>
<TextBox className="p-Home TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
</Div>
</Flex>
<Image className="p-Home chicken_burger_img bpt" {...chicken_burger_imgProps} {...chicken_burger_imgCb} {...chicken_burger_imgIoProps}/>
<Div className="p-Home item6_name bpt" {...item6_nameProps} {...item6_nameCb} {...item6_nameIoProps}>
<TextBox className="p-Home Chicken_Burger bpt" {...Chicken_BurgerProps} {...Chicken_BurgerCb} {...Chicken_BurgerIoProps}/>
</Div>
<Div className="p-Home about_item6 bpt" {...about_item6Props} {...about_item6Cb} {...about_item6IoProps}>
<TextBox className="p-Home TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
</Div>
</Flex>
<Flex className="p-Home item_7 bpt" {...item_7Props} {...item_7Cb} {...item_7IoProps}>
<Flex className="p-Home item7_price bpt" {...item7_priceProps} {...item7_priceCb} {...item7_priceIoProps}>
<Div className="p-Home Div53 bpt" {...Div53Props} {...Div53Cb} {...Div53IoProps}>
<TextBox className="p-Home TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
</Div>
</Flex>
<Image className="p-Home Egg_toast_img bpt" {...Egg_toast_imgProps} {...Egg_toast_imgCb} {...Egg_toast_imgIoProps}/>
<Div className="p-Home item7_name bpt" {...item7_nameProps} {...item7_nameCb} {...item7_nameIoProps}>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
</Div>
<Div className="p-Home about_item7 bpt" {...about_item7Props} {...about_item7Cb} {...about_item7IoProps}>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
</Div>
</Flex>
<Flex className="p-Home item_8 bpt" {...item_8Props} {...item_8Cb} {...item_8IoProps}>
<Flex className="p-Home item8_price bpt" {...item8_priceProps} {...item8_priceCb} {...item8_priceIoProps}>
<Div className="p-Home Div54 bpt" {...Div54Props} {...Div54Cb} {...Div54IoProps}>
<TextBox className="p-Home TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
</Div>
</Flex>
<Image className="p-Home Regular_Soda_img bpt" {...Regular_Soda_imgProps} {...Regular_Soda_imgCb} {...Regular_Soda_imgIoProps}/>
<Div className="p-Home item8_name bpt" {...item8_nameProps} {...item8_nameCb} {...item8_nameIoProps}>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
</Div>
<Div className="p-Home about_item8 bpt" {...about_item8Props} {...about_item8Cb} {...about_item8IoProps}>
<TextBox className="p-Home TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home order_btns bpt" {...order_btnsProps} {...order_btnsCb} {...order_btnsIoProps}>
<Button className="p-Home Button15 bpt" {...Button15Props} {...Button15Cb} {...Button15IoProps}/>
<Button className="p-Home Button16 bpt" {...Button16Props} {...Button16Cb} {...Button16IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home triple_burgerimg_and_about_it bpt" {...triple_burgerimg_and_about_itProps} {...triple_burgerimg_and_about_itCb} {...triple_burgerimg_and_about_itIoProps}>
<Flex className="p-Home burger_in_losangels bpt" {...burger_in_losangelsProps} {...burger_in_losangelsCb} {...burger_in_losangelsIoProps}>
<Div className="p-Home heading bpt" {...headingProps} {...headingCb} {...headingIoProps}>
<TextBox className="p-Home TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
</Div>
<Div className="p-Home something_about_it bpt" {...something_about_itProps} {...something_about_itCb} {...something_about_itIoProps}>
<TextBox className="p-Home TextBox61 bpt" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
</Div>
<Flex className="p-Home order_btnns bpt" {...order_btnnsProps} {...order_btnnsCb} {...order_btnnsIoProps}>
<Button className="p-Home Button17 bpt" {...Button17Props} {...Button17Cb} {...Button17IoProps}/>
<Button className="p-Home Button18 bpt" {...Button18Props} {...Button18Cb} {...Button18IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home triple_burger_img bpt" {...triple_burger_imgProps} {...triple_burger_imgCb} {...triple_burger_imgIoProps}>
<Image className="p-Home tripleburger_img bpt" {...tripleburger_imgProps} {...tripleburger_imgCb} {...tripleburger_imgIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home what_client_says bpt" {...what_client_saysProps} {...what_client_saysCb} {...what_client_saysIoProps}>
<Flex className="p-Home number_of_cmts bpt" {...number_of_cmtsProps} {...number_of_cmtsCb} {...number_of_cmtsIoProps}>
<TextBox className="p-Home TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
</Flex>
<Div className="p-Home clients_says bpt" {...clients_saysProps} {...clients_saysCb} {...clients_saysIoProps}>
<TextBox className="p-Home TextBox63 bpt" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
</Div>
<Div className="p-Home about_what_client_says bpt" {...about_what_client_saysProps} {...about_what_client_saysCb} {...about_what_client_saysIoProps}>
<TextBox className="p-Home TextBox64 bpt" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
</Div>
<Flex className="p-Home comments_section bpt" {...comments_sectionProps} {...comments_sectionCb} {...comments_sectionIoProps}>
<Flex className="p-Home left_arrow bpt" {...left_arrowProps} {...left_arrowCb} {...left_arrowIoProps}>
<Image className="p-Home Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
</Flex>
<Flex className="p-Home actual_comment_section bpt" {...actual_comment_sectionProps} {...actual_comment_sectionCb} {...actual_comment_sectionIoProps}>
<Flex className="p-Home stars bpt" {...starsProps} {...starsCb} {...starsIoProps}>
<Image className="p-Home Image31 bpt" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
<Image className="p-Home Image33 bpt" {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
<Image className="p-Home Image34 bpt" {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
<Image className="p-Home Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
<Image className="p-Home Image35 bpt" {...Image35Props} {...Image35Cb} {...Image35IoProps}/>
</Flex>
<Div className="p-Home cmt_heading bpt" {...cmt_headingProps} {...cmt_headingCb} {...cmt_headingIoProps}>
<TextBox className="p-Home TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
</Div>
<Div className="p-Home cmt_about_burgers bpt" {...cmt_about_burgersProps} {...cmt_about_burgersCb} {...cmt_about_burgersIoProps}>
<TextBox className="p-Home TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
</Div>
<Flex className="p-Home about_the_user bpt" {...about_the_userProps} {...about_the_userCb} {...about_the_userIoProps}>
<Image className="p-Home user_img bpt" {...user_imgProps} {...user_imgCb} {...user_imgIoProps}/>
<Flex className="p-Home user_details bpt" {...user_detailsProps} {...user_detailsCb} {...user_detailsIoProps}>
<Div className="p-Home user_name bpt" {...user_nameProps} {...user_nameCb} {...user_nameIoProps}>
<TextBox className="p-Home TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
</Div>
<Div className="p-Home user_place bpt" {...user_placeProps} {...user_placeCb} {...user_placeIoProps}>
<TextBox className="p-Home TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
</Div>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home right_arrow bpt" {...right_arrowProps} {...right_arrowCb} {...right_arrowIoProps}>
<Image className="p-Home Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home orderbtns bpt" {...orderbtnsProps} {...orderbtnsCb} {...orderbtnsIoProps}>
<Button className="p-Home order_online_btn_ bpt" {...order_online_btn_Props} {...order_online_btn_Cb} {...order_online_btn_IoProps}/>
<Button className="p-Home bookatable_btn bpt" {...bookatable_btnProps} {...bookatable_btnCb} {...bookatable_btnIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home our_articles bpt" {...our_articlesProps} {...our_articlesCb} {...our_articlesIoProps}>
<Flex className="p-Home title_and_links bpt" {...title_and_linksProps} {...title_and_linksCb} {...title_and_linksIoProps}>
<Div className="p-Home title_name bpt" {...title_nameProps} {...title_nameCb} {...title_nameIoProps}>
<TextBox className="p-Home TextBox69 bpt" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
</Div>
<Div className="p-Home browse_other_articles bpt" {...browse_other_articlesProps} {...browse_other_articlesCb} {...browse_other_articlesIoProps}>
<TextBox className="p-Home TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
</Div>
</Flex>
<Flex className="p-Home articles bpt" {...articlesProps} {...articlesCb} {...articlesIoProps}>
<Flex className="p-Home article_1 bpt" {...article_1Props} {...article_1Cb} {...article_1IoProps}>
<Image className="p-Home image_1 bpt" {...image_1Props} {...image_1Cb} {...image_1IoProps}/>
<Div className="p-Home article1_date bpt" {...article1_dateProps} {...article1_dateCb} {...article1_dateIoProps}>
<TextBox className="p-Home TextBox75 bpt" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
</Div>
<Div className="p-Home article1_heading bpt" {...article1_headingProps} {...article1_headingCb} {...article1_headingIoProps}>
<TextBox className="p-Home TextBox74 bpt" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
</Div>
<Div className="p-Home about_article1 bpt" {...about_article1Props} {...about_article1Cb} {...about_article1IoProps}>
<TextBox className="p-Home TextBox76 bpt" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
</Div>
</Flex>
<Flex className="p-Home four_articles bpt" {...four_articlesProps} {...four_articlesCb} {...four_articlesIoProps}>
<Flex className="p-Home first_row bpt" {...first_rowProps} {...first_rowCb} {...first_rowIoProps}>
<Flex className="p-Home article2 bpt" {...article2Props} {...article2Cb} {...article2IoProps}>
<Image className="p-Home image_2 bpt" {...image_2Props} {...image_2Cb} {...image_2IoProps}/>
<Div className="p-Home article2_date bpt" {...article2_dateProps} {...article2_dateCb} {...article2_dateIoProps}>
<TextBox className="p-Home TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
</Div>
<Div className="p-Home article2_heading bpt" {...article2_headingProps} {...article2_headingCb} {...article2_headingIoProps}>
<TextBox className="p-Home TextBox77 bpt" {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
</Div>
</Flex>
<Flex className="p-Home article_3 bpt" {...article_3Props} {...article_3Cb} {...article_3IoProps}>
<Image className="p-Home image_3 bpt" {...image_3Props} {...image_3Cb} {...image_3IoProps}/>
<Div className="p-Home article3_date bpt" {...article3_dateProps} {...article3_dateCb} {...article3_dateIoProps}>
<TextBox className="p-Home TextBox81 bpt" {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
</Div>
<Div className="p-Home article3_heading bpt" {...article3_headingProps} {...article3_headingCb} {...article3_headingIoProps}>
<TextBox className="p-Home TextBox80 bpt" {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home second_row bpt" {...second_rowProps} {...second_rowCb} {...second_rowIoProps}>
<Flex className="p-Home article_4 bpt" {...article_4Props} {...article_4Cb} {...article_4IoProps}>
<Image className="p-Home image_4 bpt" {...image_4Props} {...image_4Cb} {...image_4IoProps}/>
<Div className="p-Home article4_date bpt" {...article4_dateProps} {...article4_dateCb} {...article4_dateIoProps}>
<TextBox className="p-Home TextBox84 bpt" {...TextBox84Props} {...TextBox84Cb} {...TextBox84IoProps}/>
</Div>
<Div className="p-Home article4_heading bpt" {...article4_headingProps} {...article4_headingCb} {...article4_headingIoProps}>
<TextBox className="p-Home TextBox83 bpt" {...TextBox83Props} {...TextBox83Cb} {...TextBox83IoProps}/>
</Div>
</Flex>
<Flex className="p-Home article_5 bpt" {...article_5Props} {...article_5Cb} {...article_5IoProps}>
<Image className="p-Home image_5 bpt" {...image_5Props} {...image_5Cb} {...image_5IoProps}/>
<Div className="p-Home article5_date bpt" {...article5_dateProps} {...article5_dateCb} {...article5_dateIoProps}>
<TextBox className="p-Home TextBox87 bpt" {...TextBox87Props} {...TextBox87Cb} {...TextBox87IoProps}/>
</Div>
<Div className="p-Home article5_heading bpt" {...article5_headingProps} {...article5_headingCb} {...article5_headingIoProps}>
<TextBox className="p-Home TextBox86 bpt" {...TextBox86Props} {...TextBox86Cb} {...TextBox86IoProps}/>
</Div>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home contact_and_book_your_table bpt" {...contact_and_book_your_tableProps} {...contact_and_book_your_tableCb} {...contact_and_book_your_tableIoProps}>
<Flex className="p-Home book_your_table bpt" {...book_your_tableProps} {...book_your_tableCb} {...book_your_tableIoProps}>
<Div className="p-Home bookyourtable_title bpt" {...bookyourtable_titleProps} {...bookyourtable_titleCb} {...bookyourtable_titleIoProps}>
<TextBox className="p-Home TextBox93 bpt" {...TextBox93Props} {...TextBox93Cb} {...TextBox93IoProps}/>
</Div>
<Div className="p-Home info_div bpt" {...info_divProps} {...info_divCb} {...info_divIoProps}>
<TextBox className="p-Home TextBox92 bpt" {...TextBox92Props} {...TextBox92Cb} {...TextBox92IoProps}/>
</Div>
<Flex className="p-Home res_address bpt" {...res_addressProps} {...res_addressCb} {...res_addressIoProps}>
<Image className="p-Home Image46 bpt" {...Image46Props} {...Image46Cb} {...Image46IoProps}/>
<Div className="p-Home Div95 bpt" {...Div95Props} {...Div95Cb} {...Div95IoProps}>
<TextBox className="p-Home TextBox91 bpt" {...TextBox91Props} {...TextBox91Cb} {...TextBox91IoProps}/>
</Div>
</Flex>
<Flex className="p-Home res_phono bpt" {...res_phonoProps} {...res_phonoCb} {...res_phonoIoProps}>
<Image className="p-Home Image45 bpt" {...Image45Props} {...Image45Cb} {...Image45IoProps}/>
<Div className="p-Home Div94 bpt" {...Div94Props} {...Div94Cb} {...Div94IoProps}>
<TextBox className="p-Home TextBox90 bpt" {...TextBox90Props} {...TextBox90Cb} {...TextBox90IoProps}/>
</Div>
</Flex>
<Flex className="p-Home res_email bpt" {...res_emailProps} {...res_emailCb} {...res_emailIoProps}>
<Image className="p-Home Image44 bpt" {...Image44Props} {...Image44Cb} {...Image44IoProps}/>
<Div className="p-Home Div93 bpt" {...Div93Props} {...Div93Cb} {...Div93IoProps}>
<TextBox className="p-Home TextBox89 bpt" {...TextBox89Props} {...TextBox89Cb} {...TextBox89IoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home contact_info bpt" {...contact_infoProps} {...contact_infoCb} {...contact_infoIoProps}>
<Flex className="p-Home user_data bpt" {...user_dataProps} {...user_dataCb} {...user_dataIoProps}>
<Flex className="p-Home row1 bpt" {...row1Props} {...row1Cb} {...row1IoProps}>
<Flex className="p-Home user_name1 bpt" {...user_name1Props} {...user_name1Cb} {...user_name1IoProps}>
<Div className="p-Home Div98 bpt" {...Div98Props} {...Div98Cb} {...Div98IoProps}>
<TextBox className="p-Home TextBox94 bpt" {...TextBox94Props} {...TextBox94Cb} {...TextBox94IoProps}/>
</Div>
<Input className="p-Home Input4 bpt" {...Input4Props} {...Input4Cb} {...Input4IoProps}/>
</Flex>
<Flex className="p-Home user_email1 bpt" {...user_email1Props} {...user_email1Cb} {...user_email1IoProps}>
<Div className="p-Home Div103 bpt" {...Div103Props} {...Div103Cb} {...Div103IoProps}>
<TextBox className="p-Home TextBox99 bpt" {...TextBox99Props} {...TextBox99Cb} {...TextBox99IoProps}/>
</Div>
<Input className="p-Home Input5 bpt" {...Input5Props} {...Input5Cb} {...Input5IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home row2 bpt" {...row2Props} {...row2Cb} {...row2IoProps}>
<Flex className="p-Home user_phno1 bpt" {...user_phno1Props} {...user_phno1Cb} {...user_phno1IoProps}>
<Div className="p-Home Div105 bpt" {...Div105Props} {...Div105Cb} {...Div105IoProps}>
<TextBox className="p-Home TextBox101 bpt" {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
</Div>
<Input className="p-Home Input7 bpt" {...Input7Props} {...Input7Cb} {...Input7IoProps}/>
</Flex>
<Flex className="p-Home user_location1 bpt" {...user_location1Props} {...user_location1Cb} {...user_location1IoProps}>
<Div className="p-Home Div104 bpt" {...Div104Props} {...Div104Cb} {...Div104IoProps}>
<TextBox className="p-Home TextBox100 bpt" {...TextBox100Props} {...TextBox100Cb} {...TextBox100IoProps}/>
</Div>
<Input className="p-Home Input6 bpt" {...Input6Props} {...Input6Cb} {...Input6IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home row3 bpt" {...row3Props} {...row3Cb} {...row3IoProps}>
<Flex className="p-Home user_date1 bpt" {...user_date1Props} {...user_date1Cb} {...user_date1IoProps}>
<Div className="p-Home Div107 bpt" {...Div107Props} {...Div107Cb} {...Div107IoProps}>
<TextBox className="p-Home TextBox103 bpt" {...TextBox103Props} {...TextBox103Cb} {...TextBox103IoProps}/>
</Div>
<Input className="p-Home Input9 bpt" {...Input9Props} {...Input9Cb} {...Input9IoProps}/>
</Flex>
<Flex className="p-Home user_schedule1 bpt" {...user_schedule1Props} {...user_schedule1Cb} {...user_schedule1IoProps}>
<Div className="p-Home Div106 bpt" {...Div106Props} {...Div106Cb} {...Div106IoProps}>
<TextBox className="p-Home TextBox102 bpt" {...TextBox102Props} {...TextBox102Cb} {...TextBox102IoProps}/>
</Div>
<Input className="p-Home Input8 bpt" {...Input8Props} {...Input8Cb} {...Input8IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home row4 bpt" {...row4Props} {...row4Cb} {...row4IoProps}>
<Div className="p-Home add_a_note bpt" {...add_a_noteProps} {...add_a_noteCb} {...add_a_noteIoProps}>
<TextBox className="p-Home TextBox104 bpt" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
</Div>
<Input className="p-Home Input10 bpt" {...Input10Props} {...Input10Cb} {...Input10IoProps}/>
</Flex>
<Button className="p-Home user_button1 bpt" {...user_button1Props} {...user_button1Cb} {...user_button1IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home social_media bpt" {...social_mediaProps} {...social_mediaCb} {...social_mediaIoProps}>
<Flex className="p-Home insta_link bpt" {...insta_linkProps} {...insta_linkCb} {...insta_linkIoProps}>
<Div className="p-Home follow_us_on_instagram bpt" {...follow_us_on_instagramProps} {...follow_us_on_instagramCb} {...follow_us_on_instagramIoProps}>
<TextBox className="p-Home TextBox105 bpt" {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
</Div>
<Button className="p-Home follow_us bpt" {...follow_usProps} {...follow_usCb} {...follow_usIoProps}/>
</Flex>
<Flex className="p-Home insta_images bpt" {...insta_imagesProps} {...insta_imagesCb} {...insta_imagesIoProps}>
<Image className="p-Home Img1 bpt" {...Img1Props} {...Img1Cb} {...Img1IoProps}/>
<Image className="p-Home img2 bpt" {...img2Props} {...img2Cb} {...img2IoProps}/>
<Flex className="p-Home insta_imgs_2 bpt" {...insta_imgs_2Props} {...insta_imgs_2Cb} {...insta_imgs_2IoProps}>
<Flex className="p-Home Flex129 bpt" {...Flex129Props} {...Flex129Cb} {...Flex129IoProps}>
<Image className="p-Home img3 bpt" {...img3Props} {...img3Cb} {...img3IoProps}/>
<Image className="p-Home img4 bpt" {...img4Props} {...img4Cb} {...img4IoProps}/>
</Flex>
<Flex className="p-Home Flex130 bpt" {...Flex130Props} {...Flex130Cb} {...Flex130IoProps}>
<Image className="p-Home img5 bpt" {...img5Props} {...img5Cb} {...img5IoProps}/>
<Image className="p-Home img6 bpt" {...img6Props} {...img6Cb} {...img6IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex131 bpt" {...Flex131Props} {...Flex131Cb} {...Flex131IoProps}>
<Flex className="p-Home Flex132 bpt" {...Flex132Props} {...Flex132Cb} {...Flex132IoProps}>
<Image className="p-Home Image56 bpt" {...Image56Props} {...Image56Cb} {...Image56IoProps}/>
<Div className="p-Home Div110 bpt" {...Div110Props} {...Div110Cb} {...Div110IoProps}>
<TextBox className="p-Home TextBox106 bpt" {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
</Div>
<Flex className="p-Home Flex135 bpt" {...Flex135Props} {...Flex135Cb} {...Flex135IoProps}>
<Image className="p-Home Image57 bpt" {...Image57Props} {...Image57Cb} {...Image57IoProps}/>
<Image className="p-Home Image58 bpt" {...Image58Props} {...Image58Cb} {...Image58IoProps}/>
<Image className="p-Home Image59 bpt" {...Image59Props} {...Image59Cb} {...Image59IoProps}/>
<Image className="p-Home Image60 bpt" {...Image60Props} {...Image60Cb} {...Image60IoProps}/>
<Image className="p-Home Image61 bpt" {...Image61Props} {...Image61Cb} {...Image61IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex134 bpt" {...Flex134Props} {...Flex134Cb} {...Flex134IoProps}>
<Flex className="p-Home Flex138 bpt" {...Flex138Props} {...Flex138Cb} {...Flex138IoProps}>
<Div className="p-Home Div127 bpt" {...Div127Props} {...Div127Cb} {...Div127IoProps}>
<TextBox className="p-Home TextBox122 bpt" {...TextBox122Props} {...TextBox122Cb} {...TextBox122IoProps}/>
</Div>
<Div className="p-Home Div120 bpt" {...Div120Props} {...Div120Cb} {...Div120IoProps}>
<TextBox className="p-Home TextBox115 bpt" {...TextBox115Props} {...TextBox115Cb} {...TextBox115IoProps}/>
</Div>
<Div className="p-Home Div121 bpt" {...Div121Props} {...Div121Cb} {...Div121IoProps}>
<TextBox className="p-Home TextBox116 bpt" {...TextBox116Props} {...TextBox116Cb} {...TextBox116IoProps}/>
</Div>
<Div className="p-Home Div122 bpt" {...Div122Props} {...Div122Cb} {...Div122IoProps}>
<TextBox className="p-Home TextBox117 bpt" {...TextBox117Props} {...TextBox117Cb} {...TextBox117IoProps}/>
</Div>
<Div className="p-Home Div123 bpt" {...Div123Props} {...Div123Cb} {...Div123IoProps}>
<TextBox className="p-Home TextBox118 bpt" {...TextBox118Props} {...TextBox118Cb} {...TextBox118IoProps}/>
</Div>
<Div className="p-Home Div124 bpt" {...Div124Props} {...Div124Cb} {...Div124IoProps}>
<TextBox className="p-Home TextBox119 bpt" {...TextBox119Props} {...TextBox119Cb} {...TextBox119IoProps}/>
</Div>
<Div className="p-Home Div125 bpt" {...Div125Props} {...Div125Cb} {...Div125IoProps}>
<TextBox className="p-Home TextBox120 bpt" {...TextBox120Props} {...TextBox120Cb} {...TextBox120IoProps}/>
</Div>
<Div className="p-Home Div126 bpt" {...Div126Props} {...Div126Cb} {...Div126IoProps}>
<TextBox className="p-Home TextBox121 bpt" {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex139 bpt" {...Flex139Props} {...Flex139Cb} {...Flex139IoProps}>
<Div className="p-Home Div135 bpt" {...Div135Props} {...Div135Cb} {...Div135IoProps}>
<TextBox className="p-Home TextBox130 bpt" {...TextBox130Props} {...TextBox130Cb} {...TextBox130IoProps}/>
</Div>
<Div className="p-Home Div128 bpt" {...Div128Props} {...Div128Cb} {...Div128IoProps}>
<TextBox className="p-Home TextBox123 bpt" {...TextBox123Props} {...TextBox123Cb} {...TextBox123IoProps}/>
</Div>
<Div className="p-Home Div131 bpt" {...Div131Props} {...Div131Cb} {...Div131IoProps}>
<TextBox className="p-Home TextBox126 bpt" {...TextBox126Props} {...TextBox126Cb} {...TextBox126IoProps}/>
</Div>
<Div className="p-Home Div130 bpt" {...Div130Props} {...Div130Cb} {...Div130IoProps}>
<TextBox className="p-Home TextBox125 bpt" {...TextBox125Props} {...TextBox125Cb} {...TextBox125IoProps}/>
</Div>
<Div className="p-Home Div132 bpt" {...Div132Props} {...Div132Cb} {...Div132IoProps}>
<TextBox className="p-Home TextBox127 bpt" {...TextBox127Props} {...TextBox127Cb} {...TextBox127IoProps}/>
</Div>
<Div className="p-Home Div133 bpt" {...Div133Props} {...Div133Cb} {...Div133IoProps}>
<TextBox className="p-Home TextBox128 bpt" {...TextBox128Props} {...TextBox128Cb} {...TextBox128IoProps}/>
</Div>
<Div className="p-Home Div134 bpt" {...Div134Props} {...Div134Cb} {...Div134IoProps}>
<TextBox className="p-Home TextBox129 bpt" {...TextBox129Props} {...TextBox129Cb} {...TextBox129IoProps}/>
</Div>
<Div className="p-Home Div129 bpt" {...Div129Props} {...Div129Cb} {...Div129IoProps}>
<TextBox className="p-Home TextBox124 bpt" {...TextBox124Props} {...TextBox124Cb} {...TextBox124IoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home Flex133 bpt" {...Flex133Props} {...Flex133Cb} {...Flex133IoProps}>
<TextBox className="p-Home TextBox131 bpt" {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
<Flex className="p-Home Flex142 bpt" {...Flex142Props} {...Flex142Cb} {...Flex142IoProps}>
<Flex className="p-Home Flex141 bpt" {...Flex141Props} {...Flex141Cb} {...Flex141IoProps}>
<Image className="p-Home Image65 bpt" {...Image65Props} {...Image65Cb} {...Image65IoProps}/>
<Image className="p-Home Image64 bpt" {...Image64Props} {...Image64Cb} {...Image64IoProps}/>
</Flex>
<Flex className="p-Home Flex140 bpt" {...Flex140Props} {...Flex140Cb} {...Flex140IoProps}>
<Image className="p-Home Image62 bpt" {...Image62Props} {...Image62Cb} {...Image62IoProps}/>
<Image className="p-Home Image63 bpt" {...Image63Props} {...Image63Cb} {...Image63IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
  </>);
}
