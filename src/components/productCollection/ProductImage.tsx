import { Image, Typography } from 'antd'
import React from 'react'

interface IProductImageProps {
  id: number | string;
  size: "large" | "small";
  title: string;
  imageSrc: string;
  price: string | number;

}

export const ProductImage: React.FC<IProductImageProps> = ({ id, size, title, imageSrc, price }) => {
  return <React.Fragment>
    {size === 'large' ? (<Image src={imageSrc} height={285} width={490} />) : (
      <Image src={imageSrc} height={120} width={240} />
    )}
    <div>
      <Typography.Text type="secondary">
        {title.slice(0, 25)}
      </Typography.Text>
      <Typography.Text type="danger" strong>From {price}$</Typography.Text>
    </div>
  </React.Fragment>
}

