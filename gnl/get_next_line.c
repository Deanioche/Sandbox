/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   get_next_line.c                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dohyulee <dohyulee@student.42seoul.kr>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/01/31 15:20:20 by jaewonki          #+#    #+#             */
/*   Updated: 2022/02/14 18:49:02 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "get_next_line.h"

char	*free_memory(char *s)
{
	free(s);
	s = 0;
	return (0);
}

char	*make_line(char *back_up)
{
	char	*line;
	size_t	i;

	i = 0;
	while (back_up[i] != '\n' && back_up[i])
		i++;
	if (back_up[i] == '\n')
		i++;
	line = malloc(i + 1);
	if (!line)
		return (0);
	i = 0;
	while (back_up[i] != '\n' && back_up[i])
	{
		line[i] = back_up[i];
		i++;
	}
	if (back_up[i] == '\n')
	{
		line[i] = '\n';
		i++;
	}
	line[i] = 0;
	return (line);
}

char	*read_and_join(int fd, char *back_up)
{
	char	*buff;
	ssize_t	read_cnt;
	char	*tmp;

	buff = malloc(BUFFER_SIZE + 1);
	if (!buff)
		return (0);
	read_cnt = read(fd, buff, BUFFER_SIZE);
	while (read_cnt > 0)
	{
		buff[read_cnt] = '\0';
		tmp = back_up;
		back_up = ft_strjoin(tmp, buff);
		free_memory(tmp);
		if (ft_strchr(back_up, '\n') || !back_up)
			break ;
		read_cnt = read(fd, buff, BUFFER_SIZE);
	}
	free_memory(buff);
	if (read_cnt < 0)
		return (0);
	return (back_up);
}

char	*get_next_line(int fd)
{
	static char		*back_up;
	char			*line;
	char			*tmp;

	if (fd < 0 || BUFFER_SIZE < 1)
		return (0);
	back_up = read_and_join(fd, back_up);
	if (!back_up)
		return (0);
	if (!*back_up)
		return (free_memory(back_up));
	line = make_line(back_up);
	if (!line)
		return (free_memory(line));
	tmp = back_up;
	back_up = ft_strdup(tmp + ft_strlen(line));
	free_memory(tmp);
	if (!back_up)
		return (0);
	return (line);
}