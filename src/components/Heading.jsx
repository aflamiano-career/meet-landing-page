import Button from "./Button";

function Heading() {
  return (
    <header className="mb-8 sm:mb-20">
      <img
        src="assets/logo.svg"
        alt="Meet company logo"
        className="mx-auto mt-12 mb-8"
      />
      <div className="grid lg:grid-cols-3 py-8 justify-items-center items-center">
        <picture>
          <source
            media="(min-width: 64rem)"
            srcSet="assets/desktop/image-hero-left.png"
          />
          <img
            src="assets/tablet/image-hero.png"
            alt="Photo thumbnails of different people"
          />
        </picture>
        <div className="mt-12 max-w-md lg:max-w-lg text-center mx-auto">
          <div className="px-8">
            <h1 className="font-black text-[2.5rem] sm:text-5xl lg:text-[4rem] leading-[1.1] text-slate900">
              Group Chat for Everyone
            </h1>
            <p className="my-6 lg:text-lg">
              Meet makes it easy to connect with others face-to-face virtually
              and collaborate across any device.
            </p>
          </div>
          <div className="grid grid-rows-2 gap-2 sm:grid-rows-none sm:grid-cols-2 sm:gap-0 justify-self-center">
            <Button bgColor={"bg-cyan600 hover:bg-cyan600/75"}>
              Download <span className="text-cyan300">v1.3</span>
            </Button>
            <Button bgColor={"bg-purple600 hover:bg-purple600/75"}>
              What is it?
            </Button>
          </div>
        </div>
        <picture>
          <source
            media="(min-width: 64rem)"
            srcSet="assets/desktop/image-hero-right.png"
          />
          <img
            src="assets/tablet/image-hero.png"
            alt="Photo thumbnails of different people"
            className="hidden lg:block"
          />
        </picture>
      </div>
    </header>
  );
}

export default Heading;
