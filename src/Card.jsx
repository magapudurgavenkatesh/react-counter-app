import image from './assets/react.svg'
function Card(){
    return (
        <div className="card">
            <img className="card-image" src={image} alt="profile picture"/>
            <h1 className="card-title">Hello</h1>
            <p className="card-text">i am learing ReactJS</p>
        </div>
    );
}
export default Card