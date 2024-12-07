import React from 'react'
import './DetailInfo.css'
import { CgPlayButtonO } from 'react-icons/cg'
import TorentLinks from '../TorentLinks/TorentLinks'
import RecomendedLinks from '../RecomendedLinks/RecomendedLinks'

const DetailInfo = () => {
  return (
    <div className="DetailInfo">
      <img
        className="image"
        src="https://www.5movierulz.to/uploads/Pushpa-2-The-Rule-Telugu.jpg"
        alt=""
      />
      <h2>
        <span style={{ color: 'red' }}>5Movierulz.bid </span>not loading? try{' '}
        <span style={{ color: 'yellow' }}>5Movierulz.mobi</span> or{' '}
        <span style={{ color: '#ff00ff' }}>VPN</span>
      </h2>
      <h2 style={{ color: '#989eae', fontSize: '16px' }}>
        Watch Pushpa 2: The Rule (2024) DVDScr Telugu Full Movie Online Free
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h2 style={{ color: '#ff00ff' }}> Pushpa 2: The Rule Movie Info:</h2>

        <p className="itemSimilar">
          Directed by: <span className="spanSimilar">Sukumar</span>
        </p>
        <p className="itemSimilar">
          Written by:{' '}
          <span className="spanSimilar">
            A.R.Prabhav, Sukumar, Srikanth Vissa
          </span>
        </p>
        <p className="itemSimilar">
          Starring by:{' '}
          <span className="spanSimilar">
            Allu Arjun, Rashmika Mandanna, Fahadh Faasil, Jagapathi Babu, Sunil,
            Dayanand Reddy, Rao Ramesh, Anasuya Bharadwaj.
          </span>
        </p>
        <p className="itemSimilar">
          Genres:{' '}
          <span className="spanSimilar">
            Action, Adventure, Crime, Thriller
          </span>
        </p>
        <p className="itemSimilar">
          Categories:{' '}
          <span className="spanSimilar">
            Telugu Featured, Telugu Movies 2024
          </span>
        </p>
        <p className="itemSimilar">
          Country: <span className="spanSimilar">India :</span>
        </p>
        <p className="itemSimilar">
          Language: <span className="spanSimilar">Telugu</span>
        </p>
      </div>
      <p className="pragraph">
        Pushpa rises from a small worker to a syndicate member and eventually an
        owner, becoming a powerful smuggler. But his ongoing feud with SP
        Bhanwar Singh Shekhawat intensifies. In the meantime, Pushpa has plans
        to make MP Siddhappa the CM, using his unique strategies to pull the
        strings. He also boldly challenges Shekhawat, vowing to smuggle red
        sandalwood out of the country undetected. Meanwhile, Pushpa’s elder
        brother’s family lands in trouble. What’s the crisis? Will Pushpa be
        involved in it? And why does he want Siddhappa as CM? All these
        questions unfold as the story progresses.
      </p>
      <div className="btnGroup">
        <button className="buttn">Player 1</button>
        <button className="buttn">Player 2</button>
      </div>
      <div style={{ position: 'relative' }}>
        <img
          style={{
            width: '300px',
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'center',
            justifySelf: 'center',
          }}
          className="image"
          alt=""
          src="https://www.5movierulz.to/uploads/Pushpa-2-The-Rule-Telugu.jpg"
        />
        <p
          style={{
            textAlign: 'center',
            background: '#333',
            padding: '2px 3px',
          }}
        >
          The video keeps buffering? Just pause it for 5-10 minutes then
          continue playing!
        </p>
        <CgPlayButtonO className="playBtn" />
      </div>
      <TorentLinks />
      <RecomendedLinks />
    </div>
  )
}

export default DetailInfo
