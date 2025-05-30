import Button from "./Button";

function Footer() {
  return (
    <footer className="-mt-[1.75rem] bg-cyan600/50 relative">
      <picture>
        <source
          media="(min-width: 64rem)"
          srcSet="assets/desktop/image-footer.jpg"
        />
        <source
          media="(min-width: 40rem)"
          srcSet="assets/tablet/image-footer.jpg"
        />
        <img
          src="assets/mobile/image-footer.jpg"
          alt="Woman studying"
          className="absolute -z-1 w-full h-full object-cover object-top"
        />
      </picture>

      <div className="grid gap-6 lg:grid-cols-3 text-center px-8 py-16 static">
        <h2 className="font-black text-white text-[2rem] leading-[1.1]">
          Experience more together
        </h2>
        <p className="font-medium text-white">
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>
        <Button bgColor={"bg-purple600 hover:bg-purple600/75"}>
          Download <span className="text-purple300">v1.3</span>
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
