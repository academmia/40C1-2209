
<div class="row justify-content-center">
    <div class="col-7 offset-3 btn-group mt-1">
        <button *ngFor="let page of pages"
                class="btn btn-secondary">
            {{page}}
        </button>
    </div>
    <div class="col-2 form-inline mt-2 pr-1 float-right">
        <select class="form-control form-control-sm pr-0 float-right">
            <option value="3"> 03 / pagina</option>
            <option value="5"> 05 / pagina</option>
            <option value="10">10 / pagina</option>
            <option value="20">20 / pagina</option>
        </select>
    </div>
</div>