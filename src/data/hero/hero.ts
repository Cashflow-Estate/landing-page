import Arrow from '../../../public/images/hero/arrow.png'
import House from '../../../public/images/hero/house.png'
import Money from '../../../public/images/hero/money.png'
import { MdOutlineDashboard, MdWatchLater } from "react-icons/md";
import { IoCalculatorSharp } from "react-icons/io5";
import { FaScaleBalanced } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";



interface HeroItem {
    id: string;
    tie: string;
    title: string;
    description: string;
    tag: string; 
    img: string;
    dep: string;
    delivery: string;
}

export const hero: HeroItem[] = [
    {
        id: "1",
        tie: "Welcome to Cashflow Innovator...",
        title: "The #1 AI-Based Platform For Your Slow Flip Properties.",
        description: "Efficiently Manage, Track, Market, Collect Payments, Handle Evictions, and More - All in One Place!",
        tag: 'Start Your Free Trial Today',
        img: Arrow.src,
        dep: "Join in Seconds",
        delivery: "Cancel Any Time!"

    },
];

interface HeroCard {
    id: string;
    title: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const heroCards: HeroCard[] = [
    {
        id: "1",
        icon: MdOutlineDashboard,
        title: "Slow Flip Property KPI DashBoard",
    },
    {
        id: "2",
        icon: FaHouse,
        title: "AI Based Slow Flip Management",
    },
    {
        id: "3",
        icon: FaMoneyBill ,
        title: "Collect Monthly Payments Online",
    },
    {
        id: "4",
        icon: IoCalculatorSharp,
        title: "Payment Ledger Calculations",
    },
    {
        id: "5",
        icon: MdWatchLater,
        title: "Amortization Calculation",
    },
    {
        id: "6",
        icon: FaScaleBalanced,
        title: "Streamlined Eviction Process",
    },
];
