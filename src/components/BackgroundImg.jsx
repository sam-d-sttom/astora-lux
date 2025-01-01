import bgImgOne from '../assets/bg-img-one.jpg';

const BackgroundImg = () => {
    return (
        <div 
            className="w-screen h-screen fixed top-0 left-0 z-[-1]" 
            style={{ backgroundImage: `url(${bgImgOne})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            
        </div>
    )
}

export default BackgroundImg;