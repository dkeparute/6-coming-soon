import { ProgressBars } from "./components/progress-bar/ProgressBars.js";
import { progressBarData } from "./data/progressBarData.js";

const pb = new ProgressBars('.left-column', progressBarData);
pb.render();

const pb2 = new ProgressBars('.right-column', progressBarData);
pb2.render();