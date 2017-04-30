# Car Share Angular 2
[![GitPitch](https://gitpitch.com/assets/badge.svg)](https://gitpitch.com/LewisWatson/carshare-ninja-pitch/master?grs=github&t=white)

***Please note that development has moved to [LewisWatson/carshare-web](https://github.com/LewisWatson/carshare-web)***

[Progressive Web App] for the [carshare-back api].

Easily track the distance car share members travel as passengers and as drivers. Members can make informed decisions about who should drive based on the ratio of miles as passenger/driver.

## Deploy

```bash
ng build --prod --aot
npm run precache
firebase deploy
```

## License

Copyright 2017 Lewis Watson

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

[carshare-back api]: https://github.com/LewisWatson/carshare-back
[Progressive Web App]: https://developers.google.com/web/progressive-web-apps/
