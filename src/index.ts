export default function setSequence(
  classNameToTrack: string,
  keyframesName: string,
  delay: number
) {
  const elems = Array.from(
    document.getElementsByClassName(
      classNameToTrack
    ) as HTMLCollectionOf<HTMLElement>
  );
  elems.forEach((el, index) => {
    el.style.animationName = keyframesName;
    el.style.animationDuration = "1s";
    el.style.animationDelay = index * delay + "s";
  });
}
