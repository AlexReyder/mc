import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import DeleteIcon from '@mui/icons-material/Delete'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import EditIcon from '@mui/icons-material/Edit'
import './palettes.css'
const SortableItem = props => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isDragging,
	} = useSortable({ id: props.id })

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		width: '400px',
		height: '90px',
		backgroundColor: '#fff',
		boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
		margin: '10px',
		zIndex: isDragging ? '100' : 'auto',
		opacity: isDragging ? 0.3 : 1,
	}

	return (
		<div ref={setNodeRef} style={style} className='palette'>
			<button {...listeners} {...attributes} className='palette__btn'>
				<DragIndicatorIcon fontSize='large'></DragIndicatorIcon>
			</button>
			<div className='palette__content'>
				<img src={props.paletteImg} alt='Палетка' className='palette__img' />
				<p className='palette__name'>{props.paletteName}</p>
			</div>
			<div className='palette_controls'>
				<button className='palette__btn palette__trash' onClick={props.edit}>
					<EditIcon fontSize='large'></EditIcon>
				</button>
				<button className='palette__btn palette__trash' onClick={props.remove}>
					<DeleteIcon fontSize='large'></DeleteIcon>
				</button>
			</div>
		</div>
	)
}

export default SortableItem
