import One from '../../../public/images/understand/one.png'
import Two from '../../../public/images/understand/two.png'
import Three from '../../../public/images/understand/three.png'
import Four from '../../../public/images/understand/four.png'
import Five from '../../../public/images/understand/five.png'
import Six from '../../../public/images/understand/six.png'

interface UnderstandItem {
    id: string;
    img: string;
    desp?: string;
    title: string;
}

export const understand: UnderstandItem[] = [
    {
        id: "1",
        img: One.src,
        title: "Track Every Slow Flip",
    },
    {
        id: "2",
        img: Two.src,
        desp: 'It’s no secret: The success or failure of your coaching business comes down to the offer you have. Most coaches *think* they have a good offer, but once it’s put to the test, their offer turns out to be a dud. Let our team of experts work with you 1:1.',
        title: "Marketing Team",
    },
    {
        id: "3",
        img: Three.src,
        title: "Eviction Processor",
    },
    {
        id: "4",
        img: Four.src,
        title: "Slow Flip KPI DashBoard",
    },
    {
        id: "5",
        img: Five.src,
        title: "Slow Flip Management",
    },
    {
        id: "6",
        img: Six.src,
        title: "Amortization Schedule",
    },
];