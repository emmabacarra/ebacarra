import PropTypes from 'prop-types';

export default function ResumeSection({title, items, padding = true, isFlex = false, isList = false, alignItems = false, isTwoColumn = false}) {
    return (
        <section className={padding ? 'mx-40 mb-20 font-tt_firs_neue' : ''}>
            <div className={alignItems ? 'flex flex-col items-end' : ''}>
                <h3 className="text-violet font-bogart-bold">{title}</h3>
                {isTwoColumn ? (
                    <div className="flex justify-between my-5">
                        <ul>
                            {items[0].map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <ul className="flex flex-col items-end">
                            {items[1].map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ) : isList ? (
                    <ul className={`my-5 ${isFlex ? '' : 'list-disc ml-10'}`}>
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    items.map((item, index) => (
                        <div key={index} className="experience-item mb-5">
                            <p>{item.title}</p>
                            <p>{item.date}</p>
                            <ul className="list-disc ml-10">
                                {item.details.map((detail, detailIndex) => (
                                    <li key={detailIndex}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}

ResumeSection.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.object)
    ]).isRequired,
    padding: PropTypes.bool,
    isFlex: PropTypes.bool,
    isList: PropTypes.bool,
    alignItems: PropTypes.bool,
    isTwoColumn: PropTypes.bool,
};