// One original office joke, assembled from two invented halves so the
// setup and the twist stay separate in the source and join at runtime.

const SETUP = "My boss said AI will replace us all";
const TWIST = "so I taught it to ask for a raise first";

export function buildOfficeJoke(): string {
  const line = `${SETUP}, ${TWIST}.`;
  return line.replace(/\s+/g, " ").trim();
}
