#!/usr/bin/env node

import main from '../src/index.js';
import { displayWelcome } from '../src/ui/cliWelcome.mjs';

displayWelcome();
main();
