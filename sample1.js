// how to export and import mjs files
import {samples} from "./sample2.mjs"
samples()

import {samples2 as samples } from "./sample2.mjs"
samples()


// when there are many functions then you need to put default in export to import that func otherwise error
import sample3 from "./sample2.mjs"
sample3()

// or import 2 or more functions together
import {samples1, samples2} from "./sample2.mjs"
samples1()
samples2()