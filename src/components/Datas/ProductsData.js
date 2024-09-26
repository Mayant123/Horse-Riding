import img_1 from "../../assets/img/img_1.jpg";
import img_2 from "../../assets/img/img_2.jpg";
import img_3 from "../../assets/img/img_3.jpg";
import img_4 from "../../assets/img/img_4.jpg";
import img_5 from "../../assets/img/img_5.jpg";
import img_6 from "../../assets/img/img_6.jpg";
import img_7 from "../../assets/img/img_7.jpg";
import img_8 from "../../assets/img/img_8.jpg";
import img_9 from "../../assets/img/img_9.jpg";
import img_10 from "../../assets/img/img_10.jpg";
import img_11 from "../../assets/img/img_11.jpg";
import img_12 from "../../assets/img/img_12.jpg";
import img_13 from "../../assets/img/img_13.jpg";
import img_14 from "../../assets/img/img_14.jpg";
import saddle_1 from "../../assets/img/Saddle/1000036961.jpg";
import saddle_2 from "../../assets/img/Saddle/1000036962.jpg";
import saddle_3 from "../../assets/img/Saddle/1000036964.jpg";
import saddle_4 from "../../assets/img/Saddle/1000036965.jpg";
import saddle_5 from "../../assets/img/Saddle/1000036974.jpg";
import saddle_6 from "../../assets/img/Saddle/1000036976.png";
import saddle_7 from "../../assets/img/Saddle/1000036984.jpg";
import saddle_pad_1 from "../../assets/img/Saddle_pads/1000036966.jpg";
import saddle_pad_2 from "../../assets/img/Saddle_pads/1000036968.jpg";
import saddle_pad_3 from "../../assets/img/Saddle_pads/1000036969.jpg";
import saddle_pad_4 from "../../assets/img/Saddle_pads/1000036970.jpg";
import saddle_pad_5 from "../../assets/img/Saddle_pads/1000036977.png";
import saddle_pad_6 from "../../assets/img/Saddle_pads/1000036983.jpg";
import bridle_1 from "../../assets/img/bridle/bridle1.jpg";
import bridle_2 from "../../assets/img/bridle/bridle2.jpg";
import bridle_3 from "../../assets/img/bridle/bridle3.jpg";
import bridle_4 from "../../assets/img/bridle/bridle4.jpg";
import halter_1 from "../../assets/img/Halter/Halter1.jpg";
import halter_2 from "../../assets/img/Halter/Halter2.jpg";
import halter_3 from "../../assets/img/Halter/Halter3.jpg";
import halter_4 from "../../assets/img/Halter/Halter4.jpg";
import halter_5 from "../../assets/img/Halter/Halter5.jpg";
import halter_6 from "../../assets/img/Halter/Halter6.jpg";
import halter_7 from "../../assets/img/Halter/Halter7.jpg";
import halter_8 from "../../assets/img/Halter/Halter8.jpg";
import Stirrup_1 from "../../assets/img/Stirrups/Strirrups1.png";
import Stirrup_2 from "../../assets/img/Stirrups/Strirrups3(1).png";
import Stirrup_3 from "../../assets/img/Stirrups/Strirrups3.png";

const ProductData = [
    {
        id: 1,
        category: "Saddle",
        img: [saddle_1, saddle_2, saddle_3, saddle_4, saddle_5, saddle_6, saddle_7],
        altImg: "No Img Found",
        title: "Product Name required",
        isNewArrival:true,

    },
    {
        id: 2,
        category: "Saddle Pad",
        img: [saddle_pad_1, saddle_pad_2, saddle_pad_3, saddle_pad_4, saddle_pad_5, saddle_pad_6],
        altImg: "No Img Found",
        title: "Product Name required",
        isNewArrival:false,

    },
    // {
    //     id: 3,
    //     category: "Seat Saver",
    //     img: [img_3],
    //     altImg: "No Img Found",
    //     title: "Product Name required",
    //     isNewArrival:false,
    // },
    {
        id: 4,
        category: "Stirrup",
        img: [Stirrup_1, Stirrup_2, Stirrup_3],
        altImg: "No Img Found",
        title: "Riding apparel and footwear",
        isNewArrival:false,

    },
    {
        id: 5,
        category:"Bridle",
        img: [bridle_1, bridle_2, bridle_3, bridle_4],
        altImg: "No Img Found",
        title: "Whips and Spurs",
        isNewArrival:false,

    },
    {
        id: 6,
        category:"Martingales",
        img: [],
        altImg: "No Img Found",
        title: "Bridles and reins",
        isNewArrival:false,

    },
    {
        id: 7,
        category:"Saddle Girth",
        img: [],
        altImg: "No Img Found",
        title: "Product Name required",
        isNewArrival:false,

    },
    {
        id: 8,
        category:"Halter",
        img: [halter_1, halter_2, halter_3, halter_4, halter_5, halter_6, halter_7, halter_8],
        altImg: "No Img Found",
        title: "Product Name required",
        isNewArrival:false,
    },
    {
        id: 9,
        category:"Lead Rope",
        img: [],
        altImg: "No Img Found",
        title: "Product Name required",
        isNewArrival:false,
    },
    {
        id: 10,
        category:"Lunging Equipment",
        img: [],
        altImg: "No Img Found",
        title: "Product Name required",
        isNewArrival:false,
    },
    {
        id: 11,
        category:"Horse Boots",
        img: [],
        altImg: "No Img Found",
        title: "Product Name required",
        isNewArrival:false,
    },
    // {
    //     id: 12,
    //     category:"Helmet",
    //     img: [i],
    //     altImg: "No Img Found",
    //     title: "Product Name required",
    //     isNewArrival:false,
    // },
    {
        id: 13,
        category:"Horse Rugs",
        img: [],
        altImg: "No Img Found",
        title: "Product Name required",
        isNewArrival:false,
    },
    {
        id: 14,
        category:"Stable Equipment",
        img: [],
        altImg: "No Img Found",
        title: "Product Name required",
        isNewArrival:false,
    },
    {
        id: 15,
        category:"Grooming Equipment",
        img: [],
        altImg: "No Img Found",
        title: "Product Name required",
        isNewArrival:false,
    },
    // {
    //     id: 16,
    //     category:"Gloves",
    //     img: [],
    //     altImg: "No Img Found",
    //     title: "Product Name required",
    //     isNewArrival:false,
    // },
    {
        id:17,
        category:"Riding Boots",
        img: [],
        altImg: "No Img Found",
        title: "Product Name required",
        isNewArrival:false,
    },
    // {
    //     id:18,
    //     category:"Long Boots",
    //     img: [],
    //     altImg: "No Img Found",
    //     title: "Product Name required",
    //     isNewArrival:false,
    // },
    {
        id:19,
        category:"Riding Breeches",
        img: [],
        altImg: "No Img Found",
        title: "Product Name required",
        isNewArrival:false,
    },
    {
        id:20,
        category:"Chaps",
        img: [],
        altImg: "No Img Found",
        title: "Product Name required",
        isNewArrival:false,
    },

]

export default ProductData;