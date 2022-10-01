function Home() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://assets.bcci.tv/bcci/articles/1663320693_2INDSL499%20%281%29.JPG"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://cf-images.eu-west-1.prod.boltdns.net/v1/static/3588749423001/243d69fa-928e-4d5b-8202-9a912c830207/a4564d4f-0039-4130-b1b6-380564d52290/1280x720/match/image.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://cf-images.eu-west-1.prod.boltdns.net/v1/static/3588749423001/b183318b-df67-4997-bc9e-4ad67eb3351f/08bbe45e-617a-46fb-9ef5-78a8e8b021f9/1280x720/match/image.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
export default Home;
