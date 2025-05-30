function Main() {
  return (
    <main className="p-8 sm:mb-auto lg:max-w-6xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 pb-16">
        <img
          src="assets/desktop/image-woman-in-videocall.jpg"
          alt="Image of a woman in a videocall"
          className="rounded-lg"
        />
        <img
          src="assets/desktop/image-women-videochatting.jpg"
          alt="Image of women in a video chat"
          className="rounded-lg"
        />
        <img
          src="assets/desktop/image-men-in-meeting.jpg"
          alt="Image of men in a meeting"
          className="rounded-lg"
        />
        <img
          src="assets/desktop/image-man-texting.jpg"
          alt="Image of a man texting"
          className="rounded-lg"
        />
      </div>
      <div className="grid gap-4 text-center mb-8">
        <p className="uppercase font-black text-xs sm:text-base leading-[1.1] tracking-[.25rem] text-cyan600">
          Built for modern use
        </p>
        <h2 className="font-black text-[2rem] sm:text-4xl md:text-[2.5rem] leading-[1.1] text-slate900">
          Smarter meetings, all in one place
        </h2>
        <p className="font-medium text-lg text-slate600">
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </div>
    </main>
  );
}

export default Main;
