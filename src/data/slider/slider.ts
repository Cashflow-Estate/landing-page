declare module 'react-slick' {
    import { ComponentType } from 'react';

    interface Settings {
        dots?: boolean;
        infinite?: boolean;
        speed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        autoplay?: boolean;
        autoplaySpeed?: number;
        arrows?: boolean;
        [key: string]: any;
    }

    const Slider: ComponentType<Settings>;

    export default Slider;
}