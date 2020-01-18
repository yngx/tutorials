import React from 'react';

class Carousel extends React.Component {
    state = {
        photos: [],
        active: 0
    };

    // takes a state of property, does filtering and passes
    // it to the component
    static getDerivedStateFromProps({ media }) {
        let photos = ["http://placecorgi.com/600/600"];

        if(media.length) {
            photos = media.map(({ large }) => large );
        }

        return { photos };
    }

    handleIndexClick = event => {
        this.setState({
            // things from the DOM are returned as a tring, need unary plus to conver to number
            active: +event.target.dataset.index
        });
    };

    render() {
        const { photos, active } = this.state;

        return (
            <div className="carousel">
                <img src={photos[active]} alt="animal" />
                <div className="carousel-smaller">
                    {photos.map((photo, index) => (
                        // eslint-disable-next-line
                        <img
                            key={photo}
                            onClick={this.handleIndexClick}
                            data-index={index}
                            src={photo}
                            className={index === active ? "active": ""}
                            alt="animal thumbnail"
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel;