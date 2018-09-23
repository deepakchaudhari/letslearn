import { NgModule } from '@angular/core';

import { LetslearnportalSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [LetslearnportalSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [LetslearnportalSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class LetslearnportalSharedCommonModule {}
