import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Header": {
      "callbacks": {}
    },
    "logo_and_links": {
      "callbacks": {}
    },
    "links": {
      "callbacks": {}
    },
    "Buttons": {
      "callbacks": {}
    },
    "Info_and_burgerimage": {
      "callbacks": {}
    },
    "Info_about_burger": {
      "callbacks": {}
    },
    "best_place_in_LA": {
      "callbacks": {}
    },
    "first_div": {
      "callbacks": {}
    },
    "Div6": {
      "callbacks": {}
    },
    "information_in_div": {
      "callbacks": {}
    },
    "buttons": {
      "callbacks": {}
    },
    "Burger_image": {
      "callbacks": {}
    },
    "Favorite_apps_section": {
      "callbacks": {}
    },
    "apps_info": {
      "callbacks": {}
    },
    "apps": {
      "callbacks": {}
    },
    "browse_our_menu": {
      "callbacks": {}
    },
    "browse_menu": {
      "callbacks": {}
    },
    "menu_items": {
      "callbacks": {}
    },
    "breakfast": {
      "callbacks": {}
    },
    "Div9": {
      "callbacks": {}
    },
    "Div10": {
      "callbacks": {}
    },
    "Div11": {
      "callbacks": {}
    },
    "main_dishes": {
      "callbacks": {}
    },
    "Div12": {
      "callbacks": {}
    },
    "Div13": {
      "callbacks": {}
    },
    "Div14": {
      "callbacks": {}
    },
    "Flex24": {
      "callbacks": {}
    },
    "Div15": {
      "callbacks": {}
    },
    "Div16": {
      "callbacks": {}
    },
    "Div17": {
      "callbacks": {}
    },
    "Flex25": {
      "callbacks": {}
    },
    "Div18": {
      "callbacks": {}
    },
    "Div19": {
      "callbacks": {}
    },
    "Div20": {
      "callbacks": {}
    },
    "Flex26": {
      "callbacks": {}
    },
    "about_us": {
      "callbacks": {}
    },
    "img_and_contact": {
      "callbacks": {}
    },
    "come_and_visit_us_section": {
      "callbacks": {}
    },
    "contact_titile": {
      "callbacks": {}
    },
    "address": {
      "callbacks": {}
    },
    "location_div": {
      "callbacks": {}
    },
    "Flex34": {
      "callbacks": {}
    },
    "Div24": {
      "callbacks": {}
    },
    "Flex35": {
      "callbacks": {}
    },
    "Div25": {
      "callbacks": {}
    },
    "aboutus_in_detail": {
      "callbacks": {}
    },
    "aboutus_first_para1": {
      "callbacks": {}
    },
    "aboutus_btns": {
      "callbacks": {}
    },
    "snacks_section": {
      "callbacks": {}
    },
    "about_menu_div": {
      "callbacks": {}
    },
    "snack_items": {
      "callbacks": {}
    },
    "snacks_first_row": {
      "callbacks": {}
    },
    "item_1": {
      "callbacks": {}
    },
    "Div41": {
      "callbacks": {}
    },
    "Div42": {
      "callbacks": {}
    },
    "item1_price": {
      "callbacks": {}
    },
    "Div40": {
      "callbacks": {}
    },
    "item_4": {
      "callbacks": {}
    },
    "about_item4": {
      "callbacks": {}
    },
    "item4_name": {
      "callbacks": {}
    },
    "item4_price": {
      "callbacks": {}
    },
    "Div43": {
      "callbacks": {}
    },
    "item_3": {
      "callbacks": {}
    },
    "about_item3": {
      "callbacks": {}
    },
    "item3_name": {
      "callbacks": {}
    },
    "item3_price": {
      "callbacks": {}
    },
    "Div46": {
      "callbacks": {}
    },
    "item_2": {
      "callbacks": {}
    },
    "about_item2": {
      "callbacks": {}
    },
    "item2_name": {
      "callbacks": {}
    },
    "item2_price": {
      "callbacks": {}
    },
    "Div49": {
      "callbacks": {}
    },
    "order_btns": {
      "callbacks": {}
    },
    "snacks_second_row": {
      "callbacks": {}
    },
    "item_6": {
      "callbacks": {}
    },
    "item6_price": {
      "callbacks": {}
    },
    "Div52": {
      "callbacks": {}
    },
    "item6_name": {
      "callbacks": {}
    },
    "about_item6": {
      "callbacks": {}
    },
    "item_7": {
      "callbacks": {}
    },
    "item7_price": {
      "callbacks": {}
    },
    "Div53": {
      "callbacks": {}
    },
    "item7_name": {
      "callbacks": {}
    },
    "about_item7": {
      "callbacks": {}
    },
    "item_8": {
      "callbacks": {}
    },
    "item8_price": {
      "callbacks": {}
    },
    "Div54": {
      "callbacks": {}
    },
    "item8_name": {
      "callbacks": {}
    },
    "about_item8": {
      "callbacks": {}
    },
    "item_5": {
      "callbacks": {}
    },
    "item5_price": {
      "callbacks": {}
    },
    "Div55": {
      "callbacks": {}
    },
    "item5_name": {
      "callbacks": {}
    },
    "about_item5": {
      "callbacks": {}
    },
    "triple_burgerimg_and_about_it": {
      "callbacks": {}
    },
    "burger_in_losangels": {
      "callbacks": {}
    },
    "heading": {
      "callbacks": {}
    },
    "something_about_it": {
      "callbacks": {}
    },
    "order_btnns": {
      "callbacks": {}
    },
    "triple_burger_img": {
      "callbacks": {}
    },
    "what_client_says": {
      "callbacks": {}
    },
    "number_of_cmts": {
      "callbacks": {}
    },
    "clients_says": {
      "callbacks": {}
    },
    "about_what_client_says": {
      "callbacks": {}
    },
    "comments_section": {
      "callbacks": {}
    },
    "left_arrow": {
      "callbacks": {}
    },
    "actual_comment_section": {
      "callbacks": {}
    },
    "stars": {
      "callbacks": {}
    },
    "cmt_heading": {
      "callbacks": {}
    },
    "cmt_about_burgers": {
      "callbacks": {}
    },
    "about_the_user": {
      "callbacks": {}
    },
    "user_details": {
      "callbacks": {}
    },
    "user_name": {
      "callbacks": {}
    },
    "user_place": {
      "callbacks": {}
    },
    "right_arrow": {
      "callbacks": {}
    },
    "orderbtns": {
      "callbacks": {}
    },
    "our_articles": {
      "callbacks": {}
    },
    "title_and_links": {
      "callbacks": {}
    },
    "title_name": {
      "callbacks": {}
    },
    "browse_other_articles": {
      "callbacks": {}
    },
    "articles": {
      "callbacks": {}
    },
    "article_1": {
      "callbacks": {}
    },
    "article1_heading": {
      "callbacks": {}
    },
    "article1_date": {
      "callbacks": {}
    },
    "about_article1": {
      "callbacks": {}
    },
    "four_articles": {
      "callbacks": {}
    },
    "first_row": {
      "callbacks": {}
    },
    "article2": {
      "callbacks": {}
    },
    "article2_heading": {
      "callbacks": {}
    },
    "article2_date": {
      "callbacks": {}
    },
    "article_3": {
      "callbacks": {}
    },
    "article3_heading": {
      "callbacks": {}
    },
    "article3_date": {
      "callbacks": {}
    },
    "second_row": {
      "callbacks": {}
    },
    "article_4": {
      "callbacks": {}
    },
    "article4_heading": {
      "callbacks": {}
    },
    "article4_date": {
      "callbacks": {}
    },
    "article_5": {
      "callbacks": {}
    },
    "article5_heading": {
      "callbacks": {}
    },
    "article5_date": {
      "callbacks": {}
    },
    "contact_and_book_your_table": {
      "callbacks": {}
    },
    "book_your_table": {
      "callbacks": {}
    },
    "bookyourtable_title": {
      "callbacks": {}
    },
    "res_email": {
      "callbacks": {}
    },
    "Div93": {
      "callbacks": {}
    },
    "res_phono": {
      "callbacks": {}
    },
    "Div94": {
      "callbacks": {}
    },
    "res_address": {
      "callbacks": {}
    },
    "Div95": {
      "callbacks": {}
    },
    "info_div": {
      "callbacks": {}
    },
    "contact_info": {
      "callbacks": {}
    },
    "user_data": {
      "callbacks": {}
    },
    "row1": {
      "callbacks": {}
    },
    "user_name1": {
      "callbacks": {}
    },
    "Div98": {
      "callbacks": {}
    },
    "user_email1": {
      "callbacks": {}
    },
    "Div103": {
      "callbacks": {}
    },
    "row2": {
      "callbacks": {}
    },
    "user_location1": {
      "callbacks": {}
    },
    "Div104": {
      "callbacks": {}
    },
    "user_phno1": {
      "callbacks": {}
    },
    "Div105": {
      "callbacks": {}
    },
    "row3": {
      "callbacks": {}
    },
    "user_schedule1": {
      "callbacks": {}
    },
    "Div106": {
      "callbacks": {}
    },
    "user_date1": {
      "callbacks": {}
    },
    "Div107": {
      "callbacks": {}
    },
    "row4": {
      "callbacks": {}
    },
    "add_a_note": {
      "callbacks": {}
    },
    "social_media": {
      "callbacks": {}
    },
    "insta_images": {
      "callbacks": {}
    },
    "insta_imgs_2": {
      "callbacks": {}
    },
    "Flex129": {
      "callbacks": {}
    },
    "Flex130": {
      "callbacks": {}
    },
    "insta_link": {
      "callbacks": {}
    },
    "follow_us_on_instagram": {
      "callbacks": {}
    },
    "Flex131": {
      "callbacks": {}
    },
    "Flex132": {
      "callbacks": {}
    },
    "Div110": {
      "callbacks": {}
    },
    "Flex135": {
      "callbacks": {}
    },
    "Flex133": {
      "callbacks": {}
    },
    "Flex142": {
      "callbacks": {}
    },
    "Flex140": {
      "callbacks": {}
    },
    "Flex141": {
      "callbacks": {}
    },
    "Flex134": {
      "callbacks": {}
    },
    "Flex138": {
      "callbacks": {}
    },
    "Div120": {
      "callbacks": {}
    },
    "Div121": {
      "callbacks": {}
    },
    "Div122": {
      "callbacks": {}
    },
    "Div123": {
      "callbacks": {}
    },
    "Div124": {
      "callbacks": {}
    },
    "Div125": {
      "callbacks": {}
    },
    "Div126": {
      "callbacks": {}
    },
    "Div127": {
      "callbacks": {}
    },
    "Flex139": {
      "callbacks": {}
    },
    "Div128": {
      "callbacks": {}
    },
    "Div129": {
      "callbacks": {}
    },
    "Div130": {
      "callbacks": {}
    },
    "Div131": {
      "callbacks": {}
    },
    "Div132": {
      "callbacks": {}
    },
    "Div133": {
      "callbacks": {}
    },
    "Div134": {
      "callbacks": {}
    },
    "Div135": {
      "callbacks": {}
    },
    "restaurant_logo": {
      "custom": {
        "alt": "restaurant logo",
        "src": "/app-assets/restaurant_name.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Home": {
      "custom": {
        "text": "Home",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "About": {
      "custom": {
        "text": "About",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu": {
      "custom": {
        "text": "Menu",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Pages": {
      "custom": {
        "text": "Pages",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Cart": {
      "custom": {
        "text": "Cart",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Order_Online_btn": {
      "custom": {
        "text": "Order Online "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Reservate_btn": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Text1": {
      "custom": {
        "text": "The best place to"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Text2": {
      "custom": {
        "text": "eat burgers in LA."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox3": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "reservate_btn": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "orderonline_btn": {
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "burgerimg": {
      "custom": {
        "alt": "Burger Image",
        "src": "/app-assets/burger_image.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox": {
      "custom": {
        "text": "Order from your favorite app today!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Doordash": {
      "custom": {
        "alt": "Doordash",
        "src": "/app-assets/doordashimage.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Postmates": {
      "custom": {
        "alt": "Postmates",
        "src": "/app-assets/postmatesimg.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Rappi": {
      "custom": {
        "alt": "Rappi",
        "src": "/app-assets/rappiimg.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "GrubHub": {
      "custom": {
        "alt": "GrubHub",
        "src": "/app-assets/grubimg.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Menu_text": {
      "custom": {
        "text": "Browse our menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Breakfastimg": {
      "custom": {
        "alt": "Breakfastimg",
        "src": "/app-assets/breakfast.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Breakfast_text": {
      "custom": {
        "text": "Breakfast"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "about_breakfast": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "explore_menu": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "maindishesimg": {
      "custom": {
        "alt": "Maindishes img",
        "src": "/app-assets/maindishes.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox9": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox10": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "maindishes_text": {
      "custom": {
        "text": "Main Dishes"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image10": {
      "custom": {
        "alt": "Drinks img",
        "src": "/app-assets/drinks.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox12": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox13": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "drinks_text": {
      "custom": {
        "text": "Drinks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image11": {
      "custom": {
        "alt": "Desserts img",
        "src": "/app-assets/desserts.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox15": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox16": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox17": {
      "custom": {
        "text": "Desserts"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "order_online_btn": {
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Book_a_table_button": {
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "aboutus_img": {
      "custom": {
        "alt": "about us burger img",
        "src": "/app-assets/aboutusimg.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "text": {
      "custom": {
        "text": "Come and visit us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image14": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/mappointimg.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "location": {
      "custom": {
        "text": "837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image15": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/phonelogoimg.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox20": {
      "custom": {
        "text": "(414) 857 - 0107"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image16": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/emaillogoimg.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox21": {
      "custom": {
        "text": "losangeles@restaurantex.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "aboutus_title": {
      "custom": {
        "text": "About us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "aboutus_second_para": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper odio egestas id pulvinar consectetur elit tortor non hac pellentesque lacus donec accumsan quisque ultricies adipiscing mauris tortor cras est eu accumsan mauris."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "aboutus_first_para_text": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "about_us_btn": {
      "custom": {
        "text": "About us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "join_our_team_btn": {
      "custom": {
        "text": "Join our team"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "menu_text": {
      "custom": {
        "text": "Browse our menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "about_menu_txt": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image20": {
      "custom": {
        "alt": "classic burger img",
        "src": "/app-assets/classicburgerimg.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox37": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "chicken_burger": {
      "custom": {
        "text": "Classic Burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox36": {
      "custom": {
        "text": "$ 10.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "pancake_img": {
      "custom": {
        "alt": "pancake img",
        "src": "/app-assets/pancakesimg.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox40": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Pancakes": {
      "custom": {
        "text": "Pancakes"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox39": {
      "custom": {
        "text": "$ 8.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "classic_fries_img": {
      "custom": {
        "alt": "classic fries img",
        "src": "/app-assets/classicfriesimg.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox43": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "classic_fries": {
      "custom": {
        "text": "Classic Fries"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox42": {
      "custom": {
        "text": "$ 5.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "chocolate_milkshake_img": {
      "custom": {
        "alt": "chocolate milkshake",
        "src": "/app-assets/chocolatemilshakeimg.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox46": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "chocolate_milkshake": {
      "custom": {
        "text": "Choclate Milkshake"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox45": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button15": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button16": {
      "custom": {
        "text": "Order Online "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "chicken_burger_img": {
      "custom": {
        "alt": "chicken burger img",
        "src": "/app-assets/chickenburgerimg.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox48": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Chicken_Burger": {
      "custom": {
        "text": "Chicken Burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox53": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Egg_toast_img": {
      "custom": {
        "alt": "Egg toast img",
        "src": "/app-assets/eggtoastimg.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox49": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox54": {
      "custom": {
        "text": "Egg toast"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox55": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Regular_Soda_img": {
      "custom": {
        "alt": "Regular Soda img",
        "src": "/app-assets/regularsodaimg.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox50": {
      "custom": {
        "text": "$ 8.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox56": {
      "custom": {
        "text": "Regular Soda"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox57": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ice_cream_img": {
      "custom": {
        "alt": "ice cream img",
        "src": "/app-assets/icecreamimg.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox51": {
      "custom": {
        "text": "$ 3.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox58": {
      "custom": {
        "text": "Ice Cream"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox59": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox60": {
      "custom": {
        "text": "Taste the most delicious burger in Los Angeles, CA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox61": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum. Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button17": {
      "custom": {
        "text": "Order Online "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button18": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "tripleburger_img": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/tripleburgerimg.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox62": {
      "custom": {
        "text": "1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox63": {
      "custom": {
        "text": "What our clients say"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox64": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image29": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/left-arrow-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image31": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image33": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image34": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image35": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image36": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox65": {
      "custom": {
        "text": "“You must try these burgers”"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox66": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "user_img": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/face1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox67": {
      "custom": {
        "text": "Matt Cannon"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox68": {
      "custom": {
        "text": "Charminar ,Hyderabad"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image30": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right-arrow-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "bookatable_btn": {
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "order_online_btn_": {
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox69": {
      "custom": {
        "text": "Our articles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox70": {
      "custom": {
        "text": "Browse our articles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "image_1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/image1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox74": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox75": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox76": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipisc"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "image_2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/image2.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox77": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox78": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "image_3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/image3.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox80": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox81": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "image_4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/image4.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox83": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox84": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "image_5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/image5.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox86": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox87": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox93": {
      "custom": {
        "text": "Book your table now"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image44": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/emaillogoimg.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox89": {
      "custom": {
        "text": "losangeles@restaurantex.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image45": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/phonelogoimg.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox90": {
      "custom": {
        "text": "(414) 857 - 0107"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image46": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/mappointimg.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox91": {
      "custom": {
        "text": "837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox92": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "user_button1": {
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input4": {
      "custom": {
        "value": "",
        "placeholder": "John Carter"
      },
      "callbacks": {}
    },
    "TextBox94": {
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input5": {
      "custom": {
        "value": "",
        "placeholder": "example@email.com"
      },
      "callbacks": {}
    },
    "TextBox99": {
      "custom": {
        "text": "Email Address"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input6": {
      "custom": {
        "value": "",
        "placeholder": "Ex. Los Angeles"
      },
      "callbacks": {}
    },
    "TextBox100": {
      "custom": {
        "text": "Location"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input7": {
      "custom": {
        "value": "",
        "placeholder": "(123)456 - 789"
      },
      "callbacks": {}
    },
    "TextBox101": {
      "custom": {
        "text": "Phone"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input8": {
      "custom": {
        "value": "",
        "placeholder": "Ex. 11:00AM"
      },
      "callbacks": {}
    },
    "TextBox102": {
      "custom": {
        "text": "Schedule"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input9": {
      "custom": {
        "value": "",
        "placeholder": "Day and month"
      },
      "callbacks": {}
    },
    "TextBox103": {
      "custom": {
        "text": "Date"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input10": {
      "custom": {
        "value": "",
        "placeholder": "Do you have any note for us?"
      },
      "callbacks": {}
    },
    "TextBox104": {
      "custom": {
        "text": "Add a note"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Img1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/instaimg1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "img2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/instaimg2.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "img3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/instaimg3.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "img4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/instaimg4.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "img6": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/instaimg6.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "img5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/instaimg5.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "follow_us": {
      "custom": {
        "text": "Follow us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox105": {
      "custom": {
        "text": "Follow us on Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image56": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/restaurant_name.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox106": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image57": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image58": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image59": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image60": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image61": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox131": {
      "custom": {
        "text": "Follow us on Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image62": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/instaimg5.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image63": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/instaimg6.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image64": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/instaimg4.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image65": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/instaimg3.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox115": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox116": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox117": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox118": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox119": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox120": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox121": {
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox122": {
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox123": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox124": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox125": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox126": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox127": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox128": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox129": {
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox130": {
      "custom": {
        "text": "Utility"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
