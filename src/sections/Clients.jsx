import { clientReviews } from '../constants/index.js';

const handleClickWithDelay = (url) => {
  setTimeout(() => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, 500); // 2000 milliseconds = 2 seconds
};

const Clients = () => {
  return (
    <section className="c-space mt-10 mb-0">
      <h3 className="head-text">Church Leadership</h3>

      <div className="client-container">
        {clientReviews.map((item) => (
          <div key={`review-${item.id}`} className="client-review">
            <div>
              <p className="text-white-800 font-light">
                <span className="grid-headtext">“  </span>
                {item.id === 3
                  ? <>Ang pananampalataya ay ang katiyakan na mangyayari ang mga bagay na inaasahan, at ang katunayan ng mga bagay na hindi nakikita. — <small><em>Hebrews 11:1</em></small> </>
                  : item.review.slice(1, -1)}
                <span className="grid-headtext">  ”</span>
              </p>

              <div className="client-content">
                <div className="flex gap-3">
                  <img
                    src={item.img}
                    alt="reviewer"
                    className="w-12 h-12 rounded-full"
                    onClick={() => handleClickWithDelay(item.profileLink)}
                    style={{ cursor: 'pointer' }}
                  />
                  <div className="flex flex-col">
                    <p
                      className="font-semibold text-white-800 flex items-center client-name"
                      onClick={() => handleClickWithDelay(item.profileLink)}
                      style={{ cursor: 'pointer' }}
                    >
                      {item.name}
                      <img
                        src="/svg/Verifiedcheckmark.svg"
                        alt="Verified"
                        className="checkmark"
                      />
                    </p>
                    <p className="text-white-500 md:text-base text-sm font-light">
                      {item.position}
                    </p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index}
                      src="/assets/star.png"
                      alt="star"
                      className="w-5 h-5"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
