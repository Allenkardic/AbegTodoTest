import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';

import RNDateTimePicker from '@react-native-community/datetimepicker';

// STYLE SHEET
import {
  colors,
  padding,
  margin,
  fontSize,
  fontWeight,
  borderRadius,
  fontFamily,
  boxWithSmallShadow,
} from '../../styles';

import {formatDateToTime} from '../../config/functions';

// IMPORT COMPONENTS
import {Footer} from '../../components/footer/Footer';
import {CardWithText, TaskCard} from '../../components/cards/Cards';

import {Button} from '../../components/buttons/Buttons';

import {DashboardHeader} from '../../components/headers/DashboardHeader';

import BottomSheet from '../../components/BottomSheet/BottomSheet';

import {useDispatch, useSelector} from 'react-redux';

import {addTodo, updateTodo} from '../../redux/actions/todoAction';

export default function HomeScreen(props) {
  const refRBSheets = useRef();
  const [titleValue, setTitleValue] = React.useState('');
  const [taskDetailsValue, setTaskDetailsValue] = React.useState('');
  const [taskType, setTaskType] = React.useState('Important');
  const [headerTitle, setHeaderTitle] = useState('My Day');
  const [showDate, setShowDate] = React.useState(false);
  const [startTime, setStartTime] = React.useState(new Date());
  const [endTime, setEndTime] = React.useState(new Date());

  const dispatch = useDispatch();

  const allTodos = useSelector(state => state.todo);

  const openBottomSheet = () => {
    refRBSheets.current.open();
  };

  const horizontalScrollItems = [
    {
      title: 'My Day',
      color: headerTitle == 'My Day' ? colors.white : colors.black,
      backgroundColor:
        headerTitle == 'My Day' ? colors.purple : colors.greyLight,
    },
    {
      title: 'Important',
      color: headerTitle == 'Important' ? colors.white : colors.black,
      backgroundColor:
        headerTitle == 'Important' ? colors.purple : colors.greyLight,
    },
    {
      title: 'Planned',
      color: headerTitle == 'Planned' ? colors.white : colors.black,
      backgroundColor:
        headerTitle == 'Planned' ? colors.purple : colors.greyLight,
    },
  ];

  const bottomSheetItemsTaskType = [
    {
      title: 'Important',
      color: taskType == 'Important' ? colors.white : colors.black,
      backgroundColor:
        taskType == 'Important' ? colors.purple : colors.greyLight,
    },

    {
      title: 'Planned',
      color: taskType == 'Planned' ? colors.white : colors.black,
      backgroundColor: taskType == 'Planned' ? colors.purple : colors.greyLight,
    },
  ];

  const bottomSheetDateandTimeItems = [
    {
      iconName: 'calendar',
      title: 'Select a date',
      color: colors.black,
      backgroundColor: colors.greyLight,
    },

    {
      iconName: 'clock',
      title: 'Select time',
      color: colors.black,
      backgroundColor: colors.greyLight,
    },
  ];

  const [todoData, setTodoData] = React.useState([]);
  const [addReload, setAddReload] = React.useState(false);
  const [reload, setReload] = React.useState(false);

  React.useEffect(() => {
    setTodoData(allTodos.todos);
  }, [addReload, reload]);

  const handleUncompletedTaskCard = id => {
    dispatch(updateTodo(id));

    setReload(!reload);
  };

  const completedTodoData = todoData.filter(item => {
    return item.taskCompleted == true;
  });

  const unCompletedTodoData = todoData.filter(item => {
    return item.taskCompleted == false;
  });

  const importantTodoDataCompleted = todoData.filter(item => {
    return item.taskCompleted == true && item.taskType == 'Important';
  });

  const importantTodoDataUncompleted = todoData.filter(item => {
    return item.taskCompleted == false && item.taskType == 'Important';
  });

  const plannedTodoDataCompleted = todoData.filter(item => {
    return item.taskCompleted == true && item.taskType == 'Planned';
  });

  const plannedTodoDataUncompleted = todoData.filter(item => {
    return item.taskCompleted == false && item.taskType == 'Planned';
  });

  const headerTitleToFilterByForCompletedTask =
    headerTitle == 'Important'
      ? importantTodoDataCompleted
      : headerTitle == 'Planned'
      ? plannedTodoDataCompleted
      : completedTodoData;

  const headerTitleToFilterByForUnCompletedTask =
    headerTitle == 'Important'
      ? importantTodoDataUncompleted
      : headerTitle == 'Planned'
      ? plannedTodoDataUncompleted
      : unCompletedTodoData;

  const onChangeStartTime = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setStartTime(currentDate);
  };

  const onChangeEndTime = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setEndTime(currentDate);
  };

  const handleCreateTask = () => {
    const data = {
      id: allTodos.todos.length,
      taskTitle: titleValue,
      taskDetails: taskDetailsValue,
      startTime: formatDateToTime(startTime),
      endTime: formatDateToTime(startTime),
      taskType: taskType,
      taskDetailsPresent: taskDetailsValue.length > 2 ? true : false,
      taskCompleted: false,
    };

    // ADD TODO
    dispatch(addTodo(data));

    setAddReload(!addReload);

    //  RESET STATES
    setTitleValue('');
    setTaskDetailsValue('');
    setTaskType('Important');

    refRBSheets.current.close();
  };

  const {unm} = props.route.params;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <View
        style={{
          height: '92%',
        }}>
        <View style={{marginTop: margin.large}}>
          <DashboardHeader name={unm.length > 2 ? unm : 'User'} />

          <View>
            <ScrollView
              style={{
                marginLeft: margin.xsmall,
                marginTop: margin.xxsmall,
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {horizontalScrollItems.map((item, index) => {
                return (
                  <View key={index} style={{marginRight: margin.xsmall}}>
                    <CardWithText
                      onPress={() =>
                        index == 1
                          ? setHeaderTitle('Important')
                          : index == 2
                          ? setHeaderTitle('Planned')
                          : setHeaderTitle('My Day')
                      }
                      textColor={item.color}
                      title={item.title}
                      backgroundColor={item.backgroundColor}
                      paddingHorizontal={padding.small}
                      paddingVertical={padding.xxsmall}
                      textFontSize={fontSize.xxsmall}
                    />
                  </View>
                );
              })}
            </ScrollView>
          </View>

          <View style={{paddingBottom: 250}}>
            <ScrollView
              style={{
                paddingHorizontal: padding.xsmall,
              }}>
              <View style={{marginTop: margin.small}}>
                <Text
                  style={{
                    fontWeight: fontWeight.regular,
                    color: colors.gray,
                    fontSize: fontSize.xxsmall,
                    marginBottom: margin.xxsmall,
                  }}>
                  Tasks
                </Text>
                <View>
                  {headerTitleToFilterByForUnCompletedTask.map(
                    (item, index) => {
                      const {id} = item;
                      return (
                        <View
                          key={index}
                          style={{marginTop: index == 0 ? 0 : margin.xsmall}}>
                          <TaskCard
                            onPressCompletedTask={() =>
                              handleUncompletedTaskCard(id)
                            }
                            taskCompleted={item.taskCompleted}
                            taskDetails={item.taskDetails}
                            taskDetailsPresent={item.taskDetailsPresent}
                            endTime={item.endTime}
                            startTime={item.startTime}
                            taskTitle={item.taskTitle}
                          />
                        </View>
                      );
                    },
                  )}
                </View>
              </View>

              <View style={{marginTop: margin.small}}>
                <Text
                  style={{
                    fontWeight: fontWeight.regular,
                    color: colors.gray,
                    fontSize: fontSize.xxsmall,
                    marginBottom: margin.xxsmall,
                  }}>
                  Completed
                </Text>
                <View>
                  {headerTitleToFilterByForCompletedTask.map((item, index) => {
                    return (
                      <View key={index} style={{marginBottom: margin.xsmall}}>
                        <TaskCard
                          taskCompleted={item.taskCompleted}
                          taskDetails={item.taskDetails}
                          taskDetailsPresent={item.taskDetailsPresent}
                          endTime={item.endTime}
                          startTime={item.startTime}
                          taskTitle={item.taskTitle}
                        />
                      </View>
                    );
                  })}
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>

      <View
        style={{
          height: '8%',
        }}>
        <Footer addTodoPress={openBottomSheet} />
      </View>

      <BottomSheet refRBSheet={refRBSheets} title={'Create a task'}>
        <View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{height: '75%'}}>
            <View style={styles.sheetContainer}>
              <Text style={styles.inputHelper}>Task title</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => setTitleValue(text)}
                value={titleValue}
                placeholder="Task title"
                keyboardType="default"
              />
            </View>

            <View style={styles.sheetContainer}>
              <Text style={styles.inputHelper}>Task details</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => setTaskDetailsValue(text)}
                value={taskDetailsValue}
                placeholder="Task details"
                keyboardType="default"
              />
            </View>

            <View style={styles.sheetContainer}>
              <Text style={styles.inputHelper}>Task type</Text>

              <View style={{display: 'flex', flexDirection: 'row'}}>
                {bottomSheetItemsTaskType.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        marginRight: margin.xsmall,
                      }}>
                      <CardWithText
                        onPress={() =>
                          index == 0
                            ? setTaskType('Important')
                            : setTaskType('Planned')
                        }
                        textColor={item.color}
                        title={item.title}
                        backgroundColor={item.backgroundColor}
                        paddingHorizontal={padding.small}
                        paddingVertical={padding.xxsmall}
                        textFontSize={fontSize.xxsmall}
                      />
                    </View>
                  );
                })}
              </View>
            </View>

            <View style={styles.sheetContainer}>
              <Text style={styles.inputHelper}>Choose date & time</Text>

              <View style={{display: 'flex', flexDirection: 'row'}}>
                {bottomSheetDateandTimeItems.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        marginRight: margin.xsmall,
                      }}>
                      <CardWithText
                        onPress={() =>
                          index == 1
                            ? setShowDate(!showDate)
                            : Alert.alert('coming soon')
                        }
                        textColor={item.color}
                        title={
                          index == 1 && showDate == true
                            ? 'close'
                            : item.title || item.title
                        }
                        backgroundColor={item.backgroundColor}
                        paddingHorizontal={padding.xsmall}
                        paddingVertical={padding.xxsmall}
                        textFontSize={fontSize.xxsmall}
                        iconName={item.iconName}
                        iconPresent={true}
                      />
                    </View>
                  );
                })}
              </View>

              {showDate && (
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    marginTop: margin.xsmall,
                  }}>
                  <View style={{width: '50%'}}>
                    <Text style={styles.inputHelper}>Start time</Text>
                    <RNDateTimePicker
                      mode="time"
                      value={startTime}
                      onChange={onChangeStartTime}
                    />
                  </View>

                  <View style={{width: '50%'}}>
                    <Text style={styles.inputHelper}>End time</Text>
                    <RNDateTimePicker
                      mode="time"
                      value={endTime}
                      onChange={onChangeEndTime}
                    />
                  </View>
                </View>
              )}
            </View>

            <View
              style={[
                styles.sheetContainer,
                {
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
              ]}>
              <Text
                style={{
                  color: colors.black,
                  fontSize: fontSize.xsmall,
                  fontWeight: fontWeight.bold,
                }}>
                Get alert for this task
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: 70,
                  backgroundColor: colors.purple,
                  paddingVertical: padding.xxxsmall,
                  paddingHorizontal: padding.xxsmall,
                  borderRadius: borderRadius.medium,
                }}>
                <Text style={{color: colors.greyLight}}>On</Text>
                <Text style={{color: colors.greyLight}}>|</Text>
              </View>
            </View>
          </ScrollView>
          <View style={{paddingTop: padding.xxsmall, height: '25%'}}>
            <Button
              title={'Done'}
              backgroundColor={colors.pink}
              onPress={handleCreateTask}
            />
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  sheetContainer: {
    marginBottom: margin.small,
  },

  inputHelper: {
    color: colors.gray,
    fontSize: fontSize.xxsmall,
    fontWeight: fontWeight.bold,
    marginBottom: margin.xxsmall,
  },
  input: {
    ...boxWithSmallShadow,
    paddingLeft: padding.xxsmall,
    height: 50,
    borderWidth: 0.1,
    borderColor: colors.gray,
    backgroundColor: colors.greyLight,
    color: colors.gray,
    fontSize: fontSize.xxsmall,

    borderRadius: borderRadius.medium,
  },
});
