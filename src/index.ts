export default function setSequence(
  classNameToTrack: string,
  keyframesName: string,
  duration: number,
  delay: number
) {
  const elems = Array.from(
    document.getElementsByClassName(
      classNameToTrack
    ) as HTMLCollectionOf<HTMLElement>
  );
  elems.forEach((el, index) => {
    el.style.animationName = keyframesName;
    el.style.animationDuration = `${duration}`;
    el.style.animationDelay = `${index * delay}`;
  });
}
