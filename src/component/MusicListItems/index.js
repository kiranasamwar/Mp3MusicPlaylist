import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const MusicListItems = props => {
  const {musicListDetails, deleteSongAlbum} = props
  const {imageUrl, name, genre, duration, id} = musicListDetails

  const onClickDeleteButton = () => deleteSongAlbum(id)
  return (
    <li className="list-container">
      <div className="name-image-genre-container">
        <img src={imageUrl} alt="track" className="imageUrl" />

        <div className="name-genre-container">
          <p className="heading-name">{name}</p>
          <p className="para-genre">{genre}</p>
        </div>
      </div>
      <div className="time-icon-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="delete-button"
          onClick={onClickDeleteButton}
          data-testid="delete"
        >
          <AiOutlineDelete className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default MusicListItems
