import React from 'react'
import { Image, Typography } from 'antd'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'

interface IProductImageProps extends RouteComponentProps {
  id: number | string;
  size: "large" | "small";
  title: string;
  imageSrc: string;
  price: string | number;
}

const ProductImageComponent: React.FC<IProductImageProps> = (
  { id,
    size,
    title,
    imageSrc,
    price
  }) => {
  return <Link to={`detail/${id}`}>
    {size === 'large' ? (<Image src={imageSrc} height={285} width={490} />) : (
      <Image src={imageSrc} height={120} width={240} />
    )}
    <div>
      <Typography.Text type="secondary">
        {title.slice(0, 25)}
      </Typography.Text>
      <Typography.Text type="danger" strong> From {price}$</Typography.Text>
    </div>
  </Link>
}

export const ProductImage = withRouter(ProductImageComponent)

