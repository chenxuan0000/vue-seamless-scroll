# Individual special configuration items

- 1.The outermost container needs to be set manually`width height overflow:hidden`.

- 2.The left and right seamless rolling needs to be set for the main content area (that is, the default slot slots)`css width`(otherwise, the actual width cannot be calculated correctly). You can also set it to `display:flex;` without setting the `css width` property.

- 3.The step value is not recommended to be too small, otherwise there will be carton effect.(If single-step scrolling is set, the step needs to be a divisor of the single-step size, otherwise the position of the single-step scrolling end cannot be guaranteed to be accurate. ~~~~~, such as single step 30, step can not be 4).

- 4.You need to set when you need to manually switch left and right to scroll`autoPlay:false`(Starting with version 1.1.17, you only need to set `navigation:false`),(The loop is not currently supported).

- 5.Provides `slot left-switch || right-switch` you can freely define the button styles you want. The outer div is positioned in the middle,the distance from both sides can be adjusted by the switchOffset parameter.

- 6.When the button reaches the boundary position, it automatically adds a definition to the state button that cannot be clicked.`switchDisabledClass: 'disabled'`,you can configure it as needed.