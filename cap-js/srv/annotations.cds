using PersonService from './service';

// 목록 화면 정의
annotate PersonService.Person with @(
    UI.LineItem: [
        { 
            Value: ID,
            Label: '아이디'
        },
        { 
            Value: name,
            Label: '이름'
        },
        { 
            Value: age,
            Label: '나이'
        },
        { 
            Value: address,
            Label: '주소'
        }
    ],
    
    // 상세 화면 정의
    UI.FieldGroup #GeneralInfo: {
        Data: [
            { Value: name },
            { Value: age },
            { Value: address },
            { Value: weight }
        ]
    },
    
    UI.Facets: [
        {
            $Type: 'UI.ReferenceFacet',
            Label: '일반 정보',
            Target: '@UI.FieldGroup#GeneralInfo'
        }
    ],
    
    // 검색 가능한 필드
    UI.SelectionFields: [ name, age ]
);