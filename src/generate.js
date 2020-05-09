import override from "./override";
import svgsIndex from "./svgs-index";

const getID = type => {
  return svgsIndex[type][Math.floor(Math.random() * svgsIndex[type].length)];
};

const colors = [
  {
    skin: "#ffc2b8",
    hair: [
      "#272421",
      "#3D2314",
      "#5A3825",
      "#CC9966",
      "#2C1608",
      "#B55239",
      "#e9c67b",
      "#D7BF91"
    ],
    eye: ["#6c89cd", "#a1aec9", "#90b3fc", "#6ca596", "#634842", "#a36447"]
  },
  {
    skin: "#eab08d",
    hair: [
      "#272421",
      "#3D2314",
      "#5A3825",
      "#CC9966",
      "#2C1608",
      "#e9c67b",
      "#D7BF91"
    ],
    eye: ["#6c89cd", "#a1aec9", "#634842", "#a36447"]
  },
  {
    skin: "#ce967d",
    hair: ["#272421", "#423125"],
    eye: [
      "#432f2d",
      "#634842",
      "#755048",
      "#432f2d",
      "#634842",
      "#755048",
      "#a36447"
    ]
  },
  {
    skin: "#bb876f",
    hair: ["#272421"],
    eye: [
      "#4f4140",
      "#432f2d",
      "#634842",
      "#755048",
      "#634842",
      "#755048",
      "#a36447"
    ]
  },
  {
    skin: "#aa816f",
    hair: ["#272421"],
    eye: [
      "#6c89cd",
      "#4f4140",
      "#432f2d",
      "#634842",
      "#755048",
      "#432f2d",
      "#432f2d",
      "#634842",
      "#755048",
      "#a36447"
    ]
  },
  {
    skin: "#a67358",
    hair: ["#272421"],
    eye: ["#4f4140", "#432f2d", "#634842", "#755048", "#a36447"]
  },
  {
    skin: "#ad6453",
    hair: ["#272421"],
    eye: ["#4f4140", "#432f2d", "#634842", "#755048", "#a36447"]
  },
  {
    skin: "#74453d",
    hair: ["#272421"],
    eye: ["#4f4140", "#432f2d", "#634842", "#755048", "#a36447"]
  },
  {
    skin: "#5c3937",
    hair: ["#272421"],
    eye: ["#4f4140", "#432f2d", "#634842", "#755048", "#a36447"]
  }
];

const defaultTeamColors = ["#0d435e", "#f0494a", "#cccccc"];

const roundTwoDecimals = x => Math.round(x * 100) / 100;

const generate = overrides => {
  const eyeAngle = Math.round(Math.random() * 25 - 10);

  const palette = colors[Math.floor(Math.random() * colors.length)];
  const skinColor = palette.skin;
  const hairColor =
    palette.hair[Math.floor(Math.random() * palette.hair.length)];
  const eyeColor = palette.eye[Math.floor(Math.random() * palette.eye.length)];
  const isFlipped = Math.random() < 0.5;

  const face = {
    fatness: roundTwoDecimals(Math.random()),
    aging: roundTwoDecimals(Math.random() * Math.random()),
    teamColors: defaultTeamColors,
    body: {
      id: getID("body"),
      color: skinColor,
      tone: `rgba(255,153,62,${Math.fround(Math.random() / 2)})`
    },
    tattoo: {
      id: Math.random() < 0.5 ? getID("tattoo") : "none"
    },
    jersey: {
      id: getID("jersey")
    },
    ear: {
      id: getID("ear"),
      size: roundTwoDecimals(0.75 + Math.random() * 0.5)
    },
    head: {
      id: getID("head"),
      shave: `rgba(0,0,0,${
        Math.random() < 0.25 ? roundTwoDecimals(Math.random() / 5) : 0
      })`
    },
    eye: {
      id: getID("eye"),
      angle: eyeAngle,
      color: eyeColor,
      size: roundTwoDecimals(0.9 + 0.2 * Math.random())
    },
    agingForehead: {
      id: getID("agingForehead")
    },
    eyeLine: {
      id: Math.random() < 0.75 ? getID("eyeLine") : "none"
    },
    smileLine: {
      id: Math.random() < 0.75 ? getID("smileLine") : "none",
      size: roundTwoDecimals(0.5 + Math.random())
    },
    miscLine: {
      id: Math.random() < 0.5 ? getID("miscLine") : "none"
    },
    eyebrow: {
      id: getID("eyebrow"),
      angle: Math.round(Math.random() * 20 - 10)
    },
    hair: {
      id: getID("hair"),
      color: hairColor,
      flip: isFlipped
    },
    mouth: {
      id: getID("mouth"),
      color: `rgba(${30 + Math.floor(Math.random() * 90)}, ${Math.floor(
        Math.random() * 30
      )}, ${Math.floor(Math.random() * 30)}, ${Math.floor(Math.random() * 30) /
        100})`,
      flip: isFlipped
    },
    facialHair: {
      id: Math.random() < 0.5 ? getID("facialHair") : "none"
    },
    nose: {
      id: getID("nose"),
      flip: isFlipped,
      size: roundTwoDecimals(0.5 + Math.random() * 0.75)
    },
    glasses: {
      id: Math.random() < 0.1 ? getID("glasses") : "none"
    },
    accessories: {
      id: Math.random() < 0.2 ? getID("accessories") : "none"
    }
  };

  override(face, overrides);

  return face;
};

export default generate;
