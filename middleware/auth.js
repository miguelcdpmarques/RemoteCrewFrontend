export default function(context) {
    console.log(context.store.getters['auth/isAuthenticated'])
    if(!context.store.getters['auth/isAuthenticated']) {
        context.redirect('/admin/login')
    }
}