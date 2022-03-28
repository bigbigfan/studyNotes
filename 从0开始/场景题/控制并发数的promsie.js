
class Scheduler {
  constructor(limit) {
    this.queue = [];
    this.result = []
    this.maxCount = limit;
    this.runCounts = 0;
  }
  add(promiseCreator) {
    this.queue.push(promiseCreator);
  }
  taskStart() {
    for (let i = 0; i < this.maxCount; i++) {
      this.request();
    }
  }
  request() {
    if (!this.queue || !this.queue.length || this.runCounts > this.maxCount) {
      return ;
    }
    this.runCounts++; // 运行池+1

    this.queue.shift()().then(() => {
      this.runCounts--; // 到then说明状态改变了 运行池减1
      this.request(); // 递归调用新的request
    });
  }
}
  //  模拟接口
const timeout = time => new Promise(resolve => {
  setTimeout(resolve, time);
})

  //生成调度器 
const scheduler = new Scheduler(2);
  
// 派发任务
const addTask = (time,order) => {
  scheduler.add(() => timeout(time).then(()=>{ 
    scheduler.result.push(order)
    console.log(order)
  }))
}
  
  
addTask(1000, '1');
addTask(2000, '2');
addTask(3000, '3');
addTask(4000, '4');
  
 scheduler.taskStart()
