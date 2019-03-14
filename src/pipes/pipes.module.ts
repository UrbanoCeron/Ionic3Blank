import { NgModule } from '@angular/core';
import { MyPipe } from './my/my';
import { TestPipe } from './test/test';
@NgModule({
	declarations: [MyPipe,
    TestPipe],
	imports: [],
	exports: [MyPipe,
    TestPipe]
})
export class PipesModule {}
