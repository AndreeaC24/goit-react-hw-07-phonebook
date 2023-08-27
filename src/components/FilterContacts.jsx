import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../redux/selectors';
import { changeTextFilter } from 'redux/filtersSlice';

export const FilterContacts = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleFilterChange = evt => {
    const name = evt.target.value;
    dispatch(changeTextFilter(name));
  };
  return (
    <div className="d-flex flex-column flex-sm-row  align-items-center">
      <h3 className="fs-5 text-warning">Find contacts by name</h3>
      <label className="mx-2 form-outline">
        <input
          type="text"
          className="form-control"
          name="filter"
          value={filters.textFilter}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
};
