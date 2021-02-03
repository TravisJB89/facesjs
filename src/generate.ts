import override, { Overrides } from "./override";
import svgsIndex from "./svgs-index";

const getID = (type: string): string => {
  // @ts-ignore
  return svgsIndex[type][Math.floor(Math.random() * svgsIndex[type].length)];
};

type Race = "asian" | "black" | "brown" | "white";

const colors = {
  white: {
    skin: ["#bbcd8c", "#469890", "#9cd7b7", "#92dde3", "#71b1b7", "#8e79a4"],
    hair: ["#5f916a", "#af5454", "#447298", "#5d6a99", "#458c93", "#856d9f"],
  },
  asian: {
    skin: ["#bbcd8c", "#469890", "#9cd7b7", "#92dde3", "#71b1b7", "#8e79a4"],
    hair: ["#5f916a", "#af5454", "#447298", "#5d6a99", "#458c93", "#856d9f"],
  },
  brown: {
    skin: ["#bbcd8c", "#469890", "#9cd7b7", "#92dde3", "#71b1b7", "#8e79a4"],
    hair: ["#5f916a", "#af5454", "#447298", "#5d6a99", "#458c93", "#856d9f"],
  },
  black: {
    skin: ["#bbcd8c", "#469890", "#9cd7b7", "#92dde3", "#71b1b7", "#8e79a4"],
    hair: ["#5f916a", "#af5454", "#447298", "#5d6a99", "#458c93", "#856d9f"],
  },
};

const defaultTeamColors = ["#0d435e", "#f0494a", "#cccccc"];

const roundTwoDecimals = (x: number) => Math.round(x * 100) / 100;

const generate = (overrides?: Overrides, options?: { race?: Race }) => {
  const playerRace: Race = (function () {
    if (options && options.race) {
      return options.race;
    }
    switch (Math.floor(Math.random() * 4)) {
      case 0:
        return "white";
      case 1:
        return "asian";
      case 2:
        return "brown";
      default:
        return "black";
    }
  })();

  const eyeAngle = Math.round(Math.random() * 25 - 10);

  const palette = (function () {
    switch (playerRace) {
      case "white":
        return colors.white;
      case "asian":
        return colors.asian;
      case "brown":
        return colors.brown;
      case "black":
        return colors.black;
    }
  })();
  const skinColor =
    palette.skin[Math.floor(Math.random() * palette.skin.length)];
  const hairColor =
    palette.hair[Math.floor(Math.random() * palette.hair.length)];
  const isFlipped = Math.random() < 0.5;

  const face = {
    fatness: roundTwoDecimals(Math.random()),
    teamColors: defaultTeamColors,
    hairBg: {
      id: Math.random() < 0.1 ? getID("hairBg") : "none",
    },
    body: {
      id: getID("body"),
      color: skinColor,
    },
    jersey: {
      id: getID("jersey"),
    },
    ear: {
      id: getID("ear"),
      size: roundTwoDecimals(0.5 + Math.random()),
    },
    head: {
      id: getID("head"),
      shave: `rgba(0,0,0,${
        Math.random() < 0.25 ? roundTwoDecimals(Math.random() / 5) : 0
      })`,
    },
    eyeLine: {
      id: Math.random() < 0.75 ? getID("eyeLine") : "none",
    },
    smileLine: {
      id: Math.random() < 0.75 ? getID("smileLine") : "none",
      size: roundTwoDecimals(0.25 + 2 * Math.random()),
    },
    miscLine: {
      id: Math.random() < 0.5 ? getID("miscLine") : "none",
    },
    facialHair: {
      id: Math.random() < 0.5 ? getID("facialHair") : "none",
    },
    eye: { id: getID("eye"), angle: eyeAngle },
    eyebrow: {
      id: getID("eyebrow"),
      angle: Math.round(Math.random() * 35 - 15),
    },
    hair: {
      id: getID("hair"),
      color: hairColor,
      flip: isFlipped,
    },
    mouth: {
      id: getID("mouth"),
      flip: isFlipped,
    },
    nose: {
      id: getID("nose"),
      flip: isFlipped,
      size: roundTwoDecimals(0.5 + Math.random() * 0.75),
    },
    glasses: {
      id: Math.random() < 0.1 ? getID("glasses") : "none",
    },
    accessories: {
      id: Math.random() < 0.2 ? getID("accessories") : "none",
    },
  };

  override(face, overrides);

  return face;
};

export type Face = ReturnType<typeof generate>;

export default generate;
