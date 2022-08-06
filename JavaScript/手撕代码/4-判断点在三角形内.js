// 如何检测一个点是否在一个凸多边形内部

// interface Vector2 {
//   x: number;
//   y: number;
// }

// interface Polygon {
//   /**
//    * 凸多边形的顶点
//    */
//   points: Vector2[];
// }

// function dot(v1: Vector2, v2: Vector2) {
//   return {
//     x: v1.x * v2.x,
//     y: v1.y * v2.y,
//   };
// };

// // 1, 2, 3, 5, 6
// // 拆分三角形
// function getTra(polygon: Polygon) {
//   let first: number = 0;
//   let second = 1
//   let index = 2;
//   const { points } = polygon;
//   let length = points.length;
//   let res = []; // result
//   if (length < 3) return [];

//   while (index < length - 1) {
//     res.push([points[first], points[index], points[index + 1]]);
//     index += 1;
//   }
//   return res;
// }
// // 计算
// function getDistance(p1: Vector2, p2: Vector2): number {
//   return 0;
// }
// // 判断点是否在三角形内部
// function isInArea(point: Vector2, triangle: Vector2[]) {

//   let angleSum = 0;
//   let result = false;
//   for (let i = 0; i < triangle.length; i++) {
//     let trianglePoint = triangle[i];
//     let angle = Math.acos(dot(trianglePoint, point) / getDistance(trianglePoint, point))
//     angleSum += angle
//   }
//   if (angleSum === Math.PI * 2) {
//     return true;
//   }
//   return false;

// }

// function inPolygon(point: Vector2, polygon: Polygon): boolean {
//   // TODO
//   let result: boolean = false;

//   const triangleArr = getTra(polygon);

//   for (let i = 0; i < triangleArr.length; i++) {
//     let triangle = triangleArr[i];
//     let flag = isInArea(point, triangle);
//     if (flag) {
//       result = true;
//       break;
//     };
//   }

//   return result;
// };
/**
 * triangle: [{x,y},{x,y}, {x,y}]
 * P点: {x,y}
 * 原理：利用向量的叉乘 判断点在向量的左侧还是右侧。
 */
function isInTriangle(triangle, P) {
  let result = false;
  for (let i = 0; i < triangle.length; i++) {
    let A = triangle[i];
    let B = {};
    if (i === 2) {
      B = triangle[0];
    } else {
      B = triangle[i + 1];
    }
    // 向量AB 
    let AB = { x: B.x - A.x, y: B.y - A.y }
    let AP = { x: P.x - A.x, y: P.y - A.y }

    let x = getX(AB, AP)
    console.log(111, x)
    if (x < 0) {
      result = true;
      continue;
    } else {
      result = false;
      break;
    }
  }
  return result;
}
// 叉乘公示
function getX(p1, p2) {
  return p1.x * p2.y - p2.x * p1.y;
}

// 顺时针的点
const re = isInTriangle([{ x: 1, y: 2 }, { x: 2, y: 0 }, { x: 0, y: 0 }], { x: 1, y: 1 })
console.log(11, re)