import './LightBoxComponent.css';
import { useEffect, useRef, useReducer } from 'react';
import { imageReducer } from '../utils/counters.js'

export function LightBoxComponent({ media, modal, setModal }) {
  const [currentImage, setCurrentImage] = useReducer(imageReducer, 0);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (modal) {
      closeBtnRef.current?.focus();
      const eventHandler = (e) => {
        switch (e.key) {
          case 'Escape':
            e.preventDefault();
            setModal(false);
            break;

          case 'ArrowRight':
            e.preventDefault();
            setCurrentImage({ 
              dir: 'next',
              arr: media
            });
            break;

          case 'ArrowLeft':
            e.preventDefault();
            setCurrentImage({ 
              dir: 'prev',
              arr: media
            });
            break;

          default:
            break;
        }
      };

      window.addEventListener('keydown', eventHandler);
      return () => window.removeEventListener('keydown', eventHandler);
    }
  }, [media, modal, setModal, closeBtnRef]);

  if (!modal) return null;
  return (
    <div className="lightbox-container">
      <button ref={closeBtnRef} onClick={() => { setModal(false) }}>Close</button>
      <span className="current-counter">
        {`[${currentImage} / ${media.length}]`}
      </span>
      <img
        src={media[currentImage].url}
        alt={media[currentImage].title}
      />
      <p>{media[currentImage].title}</p>
      <div className="arrows-wrap">
        <button
          className="arrow"
          onClick={() => setCurrentImage({ dir: 'prev', arr: media})}>
          Prev
        </button>
        <button
          className="arrow"
          onClick={() => setCurrentImage({ dir: 'next', arr: media})}>
          Next
        </button>
      </div>
      <div className="images-row">
        {
          media.map(({ url, title }, index) => {
            return (<button
              type="button"
              key={`${index}`}
              onClick={() => setCurrentImage({index: index })}
            >
              <img
                src={`${url}`}
                alt={`${title}`}
              />
            </button>)
          })
        }
      </div>
    </div>
  )
}