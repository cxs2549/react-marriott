import styled from 'styled-components'
import heroMobile from '../../../assets/hero/hero-mobile.jpg'
import hero from '../../../assets/hero/hero.jpg'
const StyledHero = styled.div`
    background-image: url(${heroMobile});
    background-repeat: no-repeat;
    background-position: 0px center;
    background-size: cover;
    height: 55vh;
    width: 100%;
    color: white; 
    padding: 1rem;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    position: relative;
 z-index: 1;
 @media (min-width: 640px) {
}
@media (min-width: 768px) {
        background-position: center center;
        background-image: url(${hero});
        height: 75vh;
    }
   
    &::after {
        content: '';
        position: absolute;
        height: 100%;
        bottom: 0;
        left: 0;
        width: 100%;
        background-image: linear-gradient(to top, #151515 5%, transparent);
    }
    #wrapper {
        position: relative;
        z-index: 1;
    }
    h1 {
        text-shadow: 2px 3px 5px rgba(0,0,0,0.5);
    }
`
const Hero = () => {
return (
<StyledHero className="">
    <div id="wrapper" className="w-full mx-auto xl:max-w-6xl ">
        <div className="flex flex-col gap-y-3  pb-8 md:pb-32">
            <h1 className="text-3xl md:text-4xl xl:text-5xl md:max-w-md font-medium leading-8 max-w-xs">Earn 1,500 Bonus Points Per Stay</h1>
            <p className="max-w-xs">Plus, 3,000 more points at all-inclusive resorts.</p>
            <button className="inline-block font-medium mt-3 bg-white text-black py-2 rounded-full w-4/12 xl:w-2/12 xl:text-lg">Register Now</button>
        </div>
    </div>
</StyledHero>
)
}
export default Hero