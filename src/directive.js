/**  time:2019/4/20
 *   作者:农村的师傅
 *   功能:
 */
import Vue from 'vue';

Vue.directive('permission', {
    inserted(el, binding, vnode){
        const { value } = binding;
        const { permission } = vnode.context.$route.meta.permissionData;
        if (!permission || !permission.includes(value)) {
            el.parentNode && el.parentNode.removeChild(el);
        }

    },
    // componentUpdated(el, binding, vnode){
    //     const { value } = binding;
    //
    //     const { permission } = vnode.context.$route.meta.permissionData;
    //     console.log(permission);
    //     if (!permission || !permission.includes(value)) {
    //         console.log(value, permission)
    //         el.parentNode && el.parentNode.removeChild(el);
    //     }
    //
    // },
})
