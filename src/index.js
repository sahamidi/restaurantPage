import _ from 'lodash';
import {addHeader} from "./header.js";
import {croMenuCreate} from "./croMenu.js";
import { aboutUs } from '../aboutUs.js';

let content = document.getElementById("content")

  
  addHeader();
  croMenuCreate();
  aboutUs();
 