import ImageSlider from "./ImageSlider.jsx";
import imageProduct1 from "../assets/images/image-product-1.jpg";
import imageProduct2 from "../assets/images/image-product-2.jpg";
import imageProduct3 from "../assets/images/image-product-3.jpg";
import imageProduct4 from "../assets/images/image-product-4.jpg";
import imageProduct1Thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import imageProduct2Thumbnail from "../assets/images/image-product-2-thumbnail.jpg";
import imageProduct3Thumbnail from "../assets/images/image-product-3-thumbnail.jpg";
import imageProduct4Thumbnail from "../assets/images/image-product-4-thumbnail.jpg";

const productImageArr = [
  imageProduct1,
  imageProduct2,
  imageProduct3,
  imageProduct4,
];
const productIMageThumbnailArr = [
  imageProduct1Thumbnail,
  imageProduct2Thumbnail,
  imageProduct3Thumbnail,
  imageProduct4Thumbnail,
];
export default function HeroCard() {
  return (
    <div className={"w-93.75 md:w-91.75"}>
      <ImageSlider
        imageArr={productImageArr}
        thumbnailArr={productIMageThumbnailArr}
      />
    </div>
  );
}
