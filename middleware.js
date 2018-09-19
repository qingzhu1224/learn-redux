class lazyMan{
    constructor(name) {
        this.tasks = [];
        const first = () => {
            console.log(`my name is ${name}`);
            this.next();
        }
        this.tasks.push(first);
        setTimeout(()=>this.next(), 0);
    }
    next() {
        const task = this.tasks.shift();
        task && task();
    }
    eat(food) {
        const eat = () => {
            console.log(`eat ${food}`);
            this.next();
        };
        this.tasks.push(eat);
        return this;
    }
    sleep(time) {
        const newTime = time * 1000;
        const sleep = () => {
            console.log(`sleep ${time}s!`);
            setTimeout(() => {
                this.next();
            }, newTime);
        };
        this.tasks.push(sleep);
        return this;
    }
    sleepFirst(time) {
        const newTime = time * 1000;
        const sleepzFirst = () => {
            console.log(`sleep ${time}s first!`);
            setTimeout(() => {
                this.next();
            }, newTime);
        };
        this.tasks.unshift(sleepzFirst);
        return this;
    }
}
const aLazy = new lazyMan('王大锤');
aLazy.eat('苹果').eat('香蕉').sleep(5).eat('葡萄').eat('橘子').sleepFirst(2)


callback() {
    const fn = compose(this.middleware);

    if (!this.listeners('error').length) this.on('error', this.onerror);

    const handleRequest = (req, res) => {
      res.statusCode = 404;
      const ctx = this.createContext(req, res);
      const onerror = err => ctx.onerror(err);
      const handleResponse = () => respond(ctx);
      onFinished(res, onerror);
      return fn(ctx).then(handleResponse).catch(onerror);
    };

    return handleRequest;
  }