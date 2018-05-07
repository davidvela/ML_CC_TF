// example: OPs API Fit a polynomial (JAVASCRIPT CODE!)
// f(x) = ax2 + bx + c 
import * as tf from '@tensorflow/tfjs'
const a = tf.tensor(0.1).variable();
const b = tf.tensor(0.1).variable();
const c = tf.tensor(0.1).variable();

//const f = x => tf.add(tf.add(tf.mul(a, tf.square(x)), tf.mul(b, x), c)
const f = x => a.mul(x.square()).add(b.mul(x)).add(c);
// ... 
// mean squared error 
const loss = (preds, label)=>pred.sub(label).square().mean(); 
const optimizer = tf.train.sgd(learningRate); 

// training 
for (let i = 0; i<EPOCHS; i++ ){
    optimizer.minimize( () => loss(f(data.xs), data.ys))
}


// lstm into the browser to predict mathematic operations . 
