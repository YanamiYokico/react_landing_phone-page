import React from 'react';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard';
import { Icon } from '../Icon/Icon';
import { icons } from '../../constants/icons';

import styles from './ProductsSlider.module.scss';

interface ProductSliderProps {
  title: string;
  products: Product[];
  displayType: 'fullprice' | 'discount';
}

export const ProductsSlider: React.FC<ProductSliderProps> = ({
  title,
  products,
  displayType,
}) => {
  const id = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <section className={styles.carousel}>
      <header className={styles.carousel__top}>
        <h2 className={styles.carousel__topTitle}>{title}</h2>

        <nav className={styles.carousel__navigation}>
          <button
            className={cn(
              styles.carousel__navigationBtn,
              `carousel-prev-${id}`,
              'button-icon',
            )}
          >
            <Icon icon={icons.arrow_left} />
          </button>

          <button
            className={cn(
              styles.carousel__navigationBtn,
              `carousel-next-${id}`,
              'button-icon',
            )}
          >
            <Icon icon={icons.arrow_right} />
          </button>
        </nav>
      </header>

      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={16}
        navigation={{
          prevEl: `.carousel-prev-${id}`,
          nextEl: `.carousel-next-${id}`,
          disabledClass: styles.carousel__navigationBtnDisabled,
        }}
        className={styles.carousel__swiper}
      >
        {products.map(product => (
          <SwiperSlide key={product.id} className={styles.carousel__slide}>
            <ProductCard product={product} displayType={displayType} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
