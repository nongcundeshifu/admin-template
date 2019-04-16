/**  time:2019/4/15
 *   作者:农村的师傅
 *   功能:
 */
import router from './router';

router.beforeEach((to, from, next) => {

    console.log('beforeEach');

    next();


})

router.afterEach((to, from) => {

    // console.log('beforeEach', to, from);

})
