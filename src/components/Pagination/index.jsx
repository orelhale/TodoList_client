import Button from '../Button';

export default function Pagination({ pagesNum, handleClick, currentPage }) {

	let arr = [...Array(pagesNum == 0 ? 1 : pagesNum).keys()]

	return (
		<>
			{(arr.map((num, index) => <>
				{
					((index + 1) == (currentPage - 1) || (index + 1) == (currentPage) || (index + 1) == (currentPage + 1)) &&
					<Button onClick={() => handleClick && handleClick((index + 1))} type={currentPage == (index + 1) ? 1 : 2}>{index + 1}</Button>
				}
			</>))}
		</>
	)
}
