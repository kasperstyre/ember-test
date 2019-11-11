import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return ['John Carmack', 'John Romero', 'Sid Meier'];
    }
});
