import { src, dest } from "gulp";
import { componentPath } from "../utils/paths";
import less from "gulp-less";
import autoprefixer from "gulp-autoprefixer";
import delpath from "../utils/delpath";
import run from "../utils/run";
//删除dist
export const removeDist = () => {
  return delpath(`${componentPath}/etheral-ui`);
};

//处理样式
export const buildStyle = () => {
  return src(`${componentPath}/src/theme-chalk/*.scss`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${componentPath}/et-design/theme-chalk`))
};

//打包组件
export const buildComponent = async () => {
  run("pnpm run build", componentPath);
};
